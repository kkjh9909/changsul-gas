import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import {Context} from "../../store/Context";

export const KakaoLogin = () => {

	const { setIsLogin } = useContext(Context)

	const navigate = useNavigate();
	let code = new URL(window.location.href).searchParams.get("code");

	useEffect(() => {
		axios.get(`http://34.215.66.235:8000/auth/kakao/callback?code=${code}`)
			.then((response) => {
				const accessToken = response.data.access_token;
				if(response.status === 226) {
					window.localStorage.setItem('token', accessToken);
					setIsLogin(true);
					navigate('/');
				}
				else {
					localStorage.setItem("token", accessToken);
					navigate(`/signup`, {state: {token : accessToken}});
				}
			})
			.catch((err) => {
				console.log('login-err', err);
			})
	}, [])


	return (
		<div style={{
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
		}}>
				<CircularProgress/>
		</div>
	)
};