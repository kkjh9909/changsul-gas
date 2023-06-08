import React, {useContext, useState} from 'react'
import axios from "axios";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Context} from "../store/Context";

export const SignUp = () => {

	document.title = "회원 가입"

	const { setIsLogin } = useContext(Context);

	const location = useLocation();
	const navigate = useNavigate();

	const [nickname, setNickname] = useState("");
	const [address, setAddress] = useState("");
	const [gasMeter, setGasMeter] = useState("");

	const handleSubmit = async () => {
		try {
			const res = await axios.post(`http://34.215.66.235:8000/signup`, {
				"nickname": nickname,
				"address": address,
				"gasMeter": gasMeter
			}, {
				headers: {
					Authorization: `Bearer ${location.state.token}`
				}
			})
			window.localStorage.setItem('token', res.data.access_token);
			setIsLogin(true);
			navigate('/');
		}
		catch (err) {
			console.log('sign up err ', err);
		}
	}

	return (
		<div id="page-wrapper">
			<h1 className="page-header">회원 정보 설정</h1>
			<p>닉네임 설정</p>
			<textarea
				rows={1}
				style={{resize: 'none', backgroundColor: '#F8F8F8'}}
				className="form-control"
				onChange={event => setNickname(event.target.value)}
			/>
			<p style={{marginTop: '55px'}}>주소 설정</p>
			<textarea
				rows={3}
				className="form-control"
				style={{resize: 'none', backgroundColor: '#F8F8F8'}}
				onChange={event => setAddress(event.target.value)}
			/>
			<p style={{marginTop: '55px'}}>가스 현재값</p>
			<textarea
				rows={1}
				style={{resize: 'none', backgroundColor: '#F8F8F8'}}
				className="form-control"
				onChange={event => setGasMeter(event.target.value)}
			/>
			<div style={{textAlign: 'end'}}>
				<button className="btn btn-primary btn-lg" style={{marginTop: '100px'}} onClick={handleSubmit}>작성하기</button>
			</div>
		</div>
	)
}