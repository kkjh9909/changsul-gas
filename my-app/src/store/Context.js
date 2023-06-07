import React, {createContext, useEffect, useState} from "react";
import jwt_decode from 'jwt-decode'

const Context = createContext({})

const ContextProvider = ({children}) => {

	const [notification, setNotification] = useState([]);
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if(localStorage.getItem('token')) {
			setIsLogin(true);

			const token = localStorage.getItem('token');
			const payload = jwt_decode(token);

			const eventSource = new EventSource(`http://34.215.66.235:8000/connect/${payload.uid}`);

			eventSource.onmessage = async (event) => {
				const res = await event.data;
				setNotification([...notification, res]);
				console.log(notification);
			}

			eventSource.onerror = (event) => {
				console.log('error', event)
				eventSource.close();
			}
		}

	}, [isLogin])

	const logout = () => {
		setIsLogin(false);
		localStorage.removeItem("token");
	}

	return (
		<Context.Provider value={{isLogin, setIsLogin, logout}}>
			{children}
		</Context.Provider>
	)
}

export {Context, ContextProvider};