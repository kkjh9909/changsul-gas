import React, {useState} from 'react'
import {PostWrite, WriteBox} from "./PostWrite";
import Nav from "../components/Nav";

export const Write = () => {

	const [title, setTitle] = useState("");

	const handleTitle = (event) => {
		setTitle(event.target.value);
	}

	return (
		<div id="page-wrapper">
			<h1 className="page-header">글 작성</h1>
			<textarea
				className="form-control"
				rows='1'
				style={{resize: 'none', marginTop: '50px'}}
				placeholder="제목을 작성하세요."
				onChange={handleTitle}
			/>
			<div style={{marginTop: '50px'}}>
				<PostWrite title={title}/>
			</div>
		</div>
	)
}