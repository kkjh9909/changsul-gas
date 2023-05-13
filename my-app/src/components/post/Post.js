import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import {CommentList} from "./CommentList";
import {CommentWrite} from "./CommentWrite";
import {PostDetail} from "./PostDetail";
import {LikeButton} from "./LikeButton";
import jwt_decode from 'jwt-decode'

export const Post = () => {
	const { id } = useParams();

	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [nickname, setNickname] = useState("");

	useEffect(() => {
		axios.get(`http://34.215.66.235:8000/post?id=${id}`)
			.then(res => {
				setPost(res.data.writing)
				setComments(res.data.comments)
				const token = localStorage.getItem('token');
				const payload = jwt_decode(token);
				setNickname(payload.nickname)
			})
	}, [])

	return (
		<div id="page-wrapper">
			<PostDetail post={post} nickname={nickname} postId={id}/>
			<CommentWrite postId={id}/>
			<CommentList comments={comments}/>
		</div>
	)
}