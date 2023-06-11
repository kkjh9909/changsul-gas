
import React from "react";

export const CommentList = ({comments}) => {

	return (
		<div className="w-100">
			{
				comments.map(item => (
					<div>
						<p style={{margin: '10px'}}>{item.author}</p>
						<p style={{margin: '10px'}}>{item.content}</p>
						<p style={{margin: '10px'}}>{item.date}</p>
						<hr/>
					</div>
				))
			}
		</div>
	)
}