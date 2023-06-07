import React, {useEffect, useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const LikeButton = ({postId, likes, setLikes}) => {

	const navigate = useNavigate();

	const handleLike = async () => {
		try {
			if(!localStorage.getItem("token")) {
				const response = confirm("로그인 하실래요?");
				if(response)
					navigate('/login');
				else
					return;
			}

			const token = localStorage.getItem("token");
			const res = await axios.put(`http://34.215.66.235:8000/like/${postId}/y`, {},{
				headers: {
					"Authorization": "Bearer " + token
				}
			})

			setLikes(likes+1);
		}
		catch (err) {
			if(err.response.status === 400) {
				alert("중복 추천 불가능");
			}
		}
	}

	return (
		<div className="w-100 text-center">
			<button className="btn btn-primary" onClick={handleLike}>추천</button>
			<p>{likes}</p>
		</div>
	);
}