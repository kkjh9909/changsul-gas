import React from "react";

export const NotFound = () => {

	document.title = "오류 페이지"

	return (
		<div id="page-wrapper">
			<img src="error404.jpg" alt="error" style={{maxWidth: '100%', height: 'auto'}}/>
			<p style={{color: '#888888'}}><a href="https://kr.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_13315300.htm#query=404%20error%20page&position=0&from_view=keyword&track=ais">작가 storyset</a> 출처 Freepik</p>
		</div>
	)
}