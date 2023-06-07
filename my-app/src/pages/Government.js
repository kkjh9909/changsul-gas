import React, {useEffect} from 'react'
import Tables from "../components/table/Tables";
import {useLocation} from "react-router-dom";
import {camelCase} from "lodash";

export const Government = () => {
	const location = useLocation();

	useEffect(() => {
		document.title="정부 정책"
	})
	
	return (
		<Tables
			title={"정부 공고"}
			category={location.pathname.substring(1)}
		/>
	)
}