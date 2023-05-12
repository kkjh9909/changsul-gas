import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";

export const KakaoLogin = () => {

	const navigate = useNavigate();
	let code = new URL(window.location.href).searchParams.get("code");

	axios.get(`http://34.215.66.235:8000/auth/kakao/callback?code=${code}`)
		.then((response) => {
			const accessToken = response.data.access_token;

			if(response.status === 200)
				navigate(`/signup`, {state: {token : accessToken}});
			else if(response.status === 226) {
				window.localStorage.setItem('token', accessToken);
				navigate('/');
			}
		})
		.catch((err) => {
			console.log('에러')
			console.log(err);
		})
	return (
		<div id="page-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<CircularProgress />
		</div>
	)
};