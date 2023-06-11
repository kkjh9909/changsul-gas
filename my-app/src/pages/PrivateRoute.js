import React, {useContext, useEffect} from 'react';
import {Navigate} from "react-router-dom";
import {Context} from "../store/Context";

function PrivateRoute({component: Component}) {

	let {isLogin} = useContext(Context)

	return (
		localStorage.getItem('token') ? Component : <Navigate to={'/login'} {...alert("로그인이 필요합니다.")}/>
	)
}

export default PrivateRoute;