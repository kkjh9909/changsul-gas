import React from "react";
import axios from "axios";
import {LikeButton} from "./LikeButton";

export const PostDetail = ({post}) => {

	const deletePost = () => {
		axios.delete(`http://34.215.66.235:8000/post/${post.id}`)
			.then(res => window.location.href = "/tables")
			.catch(err => alert("에러 발생"))
	}

	const updatePost = () => {

	}

	return (
		<div>
			<h1>{post.title}</h1>
			<p className="font-monospace">{post.author}</p>
			<div>
				<p className="font-monospace">{post.date}</p>
			</div>
			<hr/>
			<div style={{minHeight: '500px'}}>
				<p>{post.content}</p>
			</div>

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