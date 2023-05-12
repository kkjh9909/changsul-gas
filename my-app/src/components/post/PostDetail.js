import React from "react";
import axios from "axios";
import {LikeButton} from "./LikeButton";
import {useNavigate} from "react-router-dom";

export const PostDetail = ({post}) => {

	const navigate = useNavigate();

	const deletePost = async () => {
		try {
			const res = await axios.delete(`http://34.215.66.235:8000/post/${post.id}`)
			navigate('/karrot')
		}
		catch(err) {
			console.log('post delete err: ', err);
		}
	}

	const updatePost = async () => {
		// try {
		// 	await axios.pu
		// }
	}

	return (
		<div>
			<h1>{post.title}</h1>
			<p className="font-monospace">{post.author}</p>
			<div>
				<p className="font-monospace">{post.date}</p>
			</div>
			<hr/>
			<div dangerouslySetInnerHTML={{ __html: post.body }} style={{minHeight: '500px'}}></div>
			<LikeButton />
			{/*로그인 회원일 시 보여주기*/}
			<div>
				<button className="btn btn-danger" style={{color: 'black'}} onClick={deletePost}>수정하기</button>
				<button className="btn btn-warning" style={{color: 'black'}} onClick={updatePost}>삭제하기</button>
			</div>
			<hr/>
		</div>
	)
}