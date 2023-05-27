import React from 'react'
import Tables from "../components/table/Tables";
import {useLocation} from "react-router-dom";
import {camelCase} from "lodash";

export const GroupBuying = () => {
	const location = useLocation();

	return (
		<Tables
			title={"공동 구매"}
			category={location.pathname.substring(1)}
		/>
	)
}