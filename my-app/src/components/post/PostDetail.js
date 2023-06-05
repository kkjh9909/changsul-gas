import React, {useState} from "react";
import axios from "axios";
import {LikeButton} from "./LikeButton";
import {useNavigate} from "react-router-dom";

export const PostDetail = ({post, nickname, postId}) => {

	const navigate = useNavigate();

	const deletePost = async () => {
		try {
			const res = await axios.delete(`http://34.215.66.235:8000/post/${postId}/${nickname}`,{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			navigate('/karrot')
		}
		catch(err) {
			console.log('post delete err: ', err);
		}
	}

	const updatePost = async () => {
		navigate(`/chatroom`, {state: post.author})
	}

	return (
		<div>
			<h1>{post.title}</h1>
			<p className="font-monospace">{post.author}</p>
			<div>
				<p className="font-monospace">{post.date}</p>
			</div>
			<hr/>
			<div dangerouslySetInnerHTML={{ __html: post.content }} style={{minHeight: '500px'}}></div>
			<LikeButton />

			{/*로그인 한 회원이면 수정/삭제 버튼 보여주기*/}
			{
				post.author === nickname ? (
					<div>
						<button className="btn btn-danger" style={{color: 'black'}} onClick={deletePost}>삭제하기</button>
					</div>
				) : (<div></div>)
			}
						<button className="btn btn-warning" style={{color: 'black'}} onClick={updatePost}>채팅걸기</button>
			<hr/>
		</div>
	)
}