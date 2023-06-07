import React from 'react'
import './Chat.css'

export const Chat = ({messages, myname}) => {
	return (
		<div className="chat-background">
			{messages.length > 0 ? (
				messages.map((message) => (
					<div key={message.id}>
						<div className={message.sender === myname ? 'my-chat-message' : 'your-chat-message'}>
							<h4>{message.message}</h4>
							<p className="time-stamp">{message.time.toLocaleString()}</p>
						</div>
					</div>
				))
			) : (
				<div></div>
			)}
		</div>
	)
}