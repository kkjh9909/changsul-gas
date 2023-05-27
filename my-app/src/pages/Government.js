import React from 'react'
import Tables from "../components/table/Tables";
import {useLocation} from "react-router-dom";
import {camelCase} from "lodash";

export const Government = () => {
	const location = useLocation();

	return (
		<Tables
			title={"정부 공고"}
			category={location.pathname.substring(1)}
		/>
	)
}