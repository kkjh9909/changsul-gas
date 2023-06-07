import React, {useEffect} from 'react'
import Tables from "../components/table/Tables";
import {useLocation} from "react-router-dom";
import {camelCase} from "lodash";

export const LifeHack = () => {
	const location = useLocation();

	document.title="생활 꿀팁"

	return (
		<Tables
			title={"생활 꿀팁"}
			category={location.pathname.substring(1)}
		/>
	)
}