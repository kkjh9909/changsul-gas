import React from 'react'
import './Chat.css'

export const Chat = ({messages, myname}) => {
	return (
		<div className="chat-background">
			{
				messages.map((message) => (
					<div>
						<div className={message.sender === myname ? 'my-chat-message' : 'your-chat-message'}>
							<h4>{message.message}</h4>
							<p className="time-stamp">{message.time}</p>
						</div>
					</div>
					)
				)
			}
		</div>
	)
}