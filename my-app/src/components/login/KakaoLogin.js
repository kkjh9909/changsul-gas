import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const KakaoLogin = () => {

	const navigate = useNavigate();
	let code = new URL(window.location.href).searchParams.get("code");

	axios.get(`http://34.215.66.235:8000/auth/kakao/callback?code=${code}`)
		.then((response) => {
			console.log(response);
			console.log(response.data);
			window.localStorage.setItem('token', response.data.token);
			navigate('/')
		})
		.catch((err) => {
			console.log(err);
			console.log(err.data);
		})
	return <div></div>;
};