import React from 'react'
import Tables from "../components/table/Tables";
import {useLocation} from "react-router-dom";
import {camelCase} from "lodash";

export const ProductReview = () => {
	const location = useLocation();

	return (
		<Tables
			title={"물품 리뷰"}
			category={location.pathname.substring(1)}
		/>
	)
}