import React, {useEffect, useRef} from 'react'
import './Chat.css'

export const Chat = ({messages, myname}) => {
	const containerRef = useRef(null);

	useEffect(() => {
		if (containerRef.current) {
			const container = containerRef.current;
			container.scrollTop = container.scrollHeight;
		}
	}, [messages]);

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