import React, {useState} from 'react'
import {PostWrite, WriteBox} from "./PostWrite";

export const Write = () => {

	const [title, setTitle] = useState("");

	const handleTitle = (event) => {
		setTitle(event.target.value);
	}

	return (
		<div className="container">
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