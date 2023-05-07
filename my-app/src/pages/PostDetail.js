import React from "react";

export const PostDetail = ({post}) => {
	return (
		<div>
			<h1>{post.title}</h1>
			<p className="font-monospace">{post.author}</p>
			<p className="font-monospace">{post.date}</p>
			<hr/>
			<div style={{minHeight: '500px'}}>
				<p>{post.content}</p>
			</div>
			<hr/>
		</div>
	)
}