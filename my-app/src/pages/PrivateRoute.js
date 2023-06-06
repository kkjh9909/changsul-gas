import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {Context} from "../store/Context";

function PrivateRoute({component: Component}) {

	const { isLogin } = useContext(Context);

	return (
		isLogin ? Component : <Navigate to={'/login'} {...alert("로그인이 필요합니다.")}/>
	)
}

export default PrivateRoute;