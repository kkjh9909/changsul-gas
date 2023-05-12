import React from "react";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CommentWrite = ({postId}) => {

	const navigate = useNavigate();

	const [comment, setComment] = useState("");
	const [rows, setRows] = useState(2);

	const handleChange = (event) => {
		setComment(event.target.value);
		setRows(event.target.value.split('\n').length + 1);
	}

	const handleWrite = async () => {
		try {
			const res = await axios.post('http://34.215.66.235:8000/comment', {
				"post_id": postId,
				"content": comment,
			}, {
				headers: {
					Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6InRlc3QxIiwidWlkIjoiMTAyODkwMTcyOTA0IiwiZXhwIjoxNjg2NDYxMTMzfQ.XabT9zlsappBJrz3OQ3XkN1Flixu_qGZaGMQwzyIApc`
				}
			})

			window.location.reload();
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
			/>
			<button className="btn btn-primary" onClick={handleWrite}>작성하기</button>
		</div>
	)
}