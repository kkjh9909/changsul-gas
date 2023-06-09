import React, {useContext} from "react";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Context} from "../../store/Context";
import jwt_decode from "jwt-decode";

export const CommentWrite = ({postId, comments, setComments}) => {

	const { isLogin } = useContext(Context);
	const navigate = useNavigate();

	const [comment, setComment] = useState("");
	const [rows, setRows] = useState(2);

	const handleChange = (event) => {
		setComment(event.target.value);
		setRows(event.target.value.split('\n').length + 1);
	}

	const convertTimeFormat = (time) => {

		const year = time.getFullYear().toString().slice(-2);
		const month = (time.getMonth() + 1).toString().padStart(2, "0");
		const day = time.getDate().toString().padStart(2, "0");
		const hour = time.getHours().toString().padStart(2, "0");
		const minute = time.getMinutes().toString().padStart(2, "0");
		const second = time.getSeconds().toString().padStart(2, "0");

		return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
	}

	const handleWrite = async () => {
		try {
			if(!isLogin) {
				const result = confirm("로그인 하실래요?");
				if(result) {
					navigate("/login");
					return;
				}
				else
					return;
			}
			if(comment === "") {
				alert("댓글은 빈 칸 안돼")
				return;
			}

			const res = await axios.post('http://34.215.66.235:8000/comment', {
				"post_id": postId,
				"content": comment,
			}, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})

			setComments([...comments, {
				"content": comment,
				"author": jwt_decode(localStorage.getItem('token')).nickname,
				"date": convertTimeFormat(new Date()),
				"id": 1
			}])
			setComment("");
			// window.location.reload();
		}
		catch(err) {
			console.log('comment write err ', err);
		}
	}

	return (
		<div className="w-100 d-flex flex-column">
			<textarea
				placeholder="댓글을 작성하세요."
				className="form-control h-100"
				rows = {rows}
				onChange = {handleChange}
				style={{resize: 'none'}}
				value={comment}
			/>
			<button className="btn btn-primary" onClick={handleWrite}>작성하기</button>
		</div>
	)
}