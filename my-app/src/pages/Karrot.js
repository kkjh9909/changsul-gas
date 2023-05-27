
import React from 'react'
import Tables from "../components/table/Tables";
import {camelCase} from "lodash";
import {useLocation} from "react-router-dom";

export const Karrot = () => {
	const location = useLocation();

	return(
		<Tables
			title={"중고 거래"}
			category={location.pathname.substring(1)}
		/>
	)
}