import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import axios from "axios";
import {CommentList} from "./CommentList";
import {CommentWrite} from "./CommentWrite";
import {PostDetail} from "./PostDetail";
import {LikeButton} from "./LikeButton";

export const Post = () => {
	const { id } = useParams();

	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	useEffect(() => {
		// axios.get(`http://34.215.66.235:8000/post?id=${id}`)
		// 	.then(res => setPost(res.data))

		setPost({
				"title": "test",
				"content": "test 내용입니다",
				"author": "작성자입니다",
				"date": "23-04-12 10:25:41"
			,
		})

		setComments([
			{
				"content": "댓글 내용입니다",
				"author": "작성자입니다",
				"date": "23-04-20 17:24:56",
				"id": 17
			},
			{
				"content": "댓글 내용입니다",
				"author": "작성자입니다",
				"date": "23-04-20 17:24:56",
				"id": 24
			}
		])
	}, [])

	return (
		<div id="page-wrapper">
			<PostDetail post={post}/>
			<CommentWrite />
			<CommentList comments={comments}/>
		</div>
	)
}