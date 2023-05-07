import React from "react";
import {useState} from "react";
import axios from "axios";

export const PostWrite = ({title}) => {

	const minRows = 20;
	const [body, setBody] = useState("");
	const [rows, setRows] = useState(minRows);

	const handleChange = (event) => {
		setBody(event.target.value);
		let len = event.target.value.split('\n').length;
		setRows(len <= 20 ? minRows : len + 1)
	}

	const handleWrite = () => {
		// comment 정보 서버로 전송
		// {title, body}
	}

	return (
		<div className="w-100 d-flex flex-column">
			<textarea
				placeholder="본문을 작성하세요."
				className="form-control h-100"
				rows = {rows}
				onChange = {handleChange}
				style={{resize: 'none'}}
			/>
			<button className="btn btn-primary" onClick={handleWrite}>작성하기</button>
		</div>
	)
}