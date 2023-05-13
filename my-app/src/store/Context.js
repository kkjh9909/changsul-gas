import React, {createContext, useEffect, useState} from "react";

const Context = createContext({})

const ContextProvider = ({children}) => {
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		if(localStorage.getItem('token'))
			setIsLogin(true);
	}, [isLogin])

	return (
		<Context.Provider value={{isLogin, setIsLogin}}>
			{children}
		</Context.Provider>
	)
}

export {Context, ContextProvider};