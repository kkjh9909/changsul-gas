import React, {useState} from 'react'
import {PostWrite, WriteBox} from "../components/post/PostWrite";
import Nav from "../components/Nav";
import {useParams} from "react-router-dom";

export const Write = () => {

	document.title="글 작성하기"

	const [title, setTitle] = useState("");

	const category = useParams();

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
				<PostWrite
					title={title}
					category={category}
				/>
			</div>
		</div>
	)
}