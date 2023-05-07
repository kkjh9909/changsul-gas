
import React from "react";

export const CommentList = ({comments}) => {

	return (
		<div className="w-100">
			{
				comments.map(item => (
					<div>
						<p>{item.author}</p>
						<p>{item.content}</p>
						<p>{item.date}</p>
						<hr/>
					</div>
				))
			}
		</div>
	)
}