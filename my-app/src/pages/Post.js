import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import {CommentList} from "../components/post/CommentList";
import {CommentWrite} from "../components/post/CommentWrite";
import {PostDetail} from "../components/post/PostDetail";
import {LikeButton} from "../components/post/LikeButton";
import jwt_decode from 'jwt-decode'
import {Context} from "../store/Context";

export const Post = () => {

	const { id } = useParams();
	const { calculateDate } = useContext(Context);

	const [post, setPost] = useState({});
	const [likes, setLikes] = useState(0);
	const [comments, setComments] = useState([]);
	const [nickname, setNickname] = useState("");
	const [date, setDate] = useState("");

	document.title = post.title;

	useEffect(() => {
		axios.get(`http://34.215.66.235:8000/post?id=${id}`)
			.then(res => {
				setPost(res.data.writing);
				setLikes(res.data.writing.likes);
				setComments(res.data.comments);
				setDate(calculateDate(res.data.writing.date));
				if(localStorage.getItem('token')) {
					const token = localStorage.getItem('token');
					const payload = jwt_decode(token);
					setNickname(payload.nickname)
				}
			})
	}, [likes, post])

	return (
		<div id="page-wrapper">
			<PostDetail
				post={post}
				nickname={nickname}
				postId={id}
				likes={likes}
				setLikes={setLikes}
				date={date}
			/>
			<CommentWrite
				postId={id}
				comments={comments}
			 	setComments={setComments}
			/>
			<CommentList
				comments={comments}
			/>
		</div>
	)
}