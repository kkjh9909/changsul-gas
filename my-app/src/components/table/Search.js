import SearchIcon from "@mui/icons-material/Search";
import React, {useEffect, useMemo, useState} from "react";
import {debounce} from "lodash";
import axios from "axios";

export const Search = ({type, setType, setQuery}) => {

	const debounceSearch = debounce(async (query) => {
		try {
			console.log(query);
			setQuery(query);
		}
		catch(err) {
			console.log('search err ', err);
		}
	}, 500);

	const handleInput = (event) => {
		debounceSearch(event.target.value);
	}

	function handleDropdownClick(event) {
		setType(event.target.value)
		console.log(event.target.value);
	}

	return (
			<div className="search-line">
				<div className="row search-box">
					<select value={type} onChange={handleDropdownClick} className="form-select">
						<option value="title">제목</option>
						<option value="author">작성자</option>
					</select>
					<SearchIcon className="search-icon"/>
					<input
						placeholder="검색어를 입력하세요"
						className="search-input"
						onChange={handleInput}
					/>
				</div>
			</div>
	)
}