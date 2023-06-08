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
				let temp, parsed;
				parsed = res.split(':');
				const type = parsed[0]
				parsed = parsed[1].replace("\n\n", "").split("_");
				if (type === "chat" || type === "comment") {
					try {
						temp = localStorage.getItem(type);
						temp = JSON.parse(temp);
						temp[parsed[0]] = parsed.slice(1)
					}
					catch {
						temp = {}
						temp[parsed[0]] = parsed.slice(1)
					}
					finally {
						localStorage.setItem(type, JSON.stringify(temp))
					}
				}

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

	const parseDateFormat = (date) => {
		const parts = date.split(' ');
		const dateParts = parts[0].split('-');
		const timeParts = parts[1].split(':');

		const year = parseInt(dateParts[0], 10) + 2000; // 2-digit year을 4-digit year로 변환
		const month = parseInt(dateParts[1], 10) - 1; // 월은 0부터 시작하므로 1을 빼줌
		const day = parseInt(dateParts[2], 10);
		const hour = parseInt(timeParts[0], 10);
		const minute = parseInt(timeParts[1], 10);
		const second = parseInt(timeParts[2], 10);

		return new Date(year, month, day, hour, minute, second);
	}

	const calculateDate = (date) => {
		const milliSeconds = new Date() - parseDateFormat(date);
		const seconds = milliSeconds / 1000;
		if (seconds < 60) return `방금 전`;
		const minutes = seconds / 60;
		if (minutes < 60) return `${Math.floor(minutes)}분 전`;
		const hours = minutes / 60;
		if (hours < 24) return `${Math.floor(hours)}시간 전`;
		const days = hours / 24;
		if (days < 7) return `${Math.floor(days)}일 전`;
		const weeks = days / 7;
		if (weeks < 5) return `${Math.floor(weeks)}주 전`;
		const months = days / 30;
		if (months < 12) return `${Math.floor(months)}개월 전`;
		const years = days / 365;
		return `${Math.floor(years)}년 전`;
	}

	return (
		<Context.Provider value={{isLogin, setIsLogin, logout, calculateDate}}>
			{children}
		</Context.Provider>
	)
}

export {Context, ContextProvider};