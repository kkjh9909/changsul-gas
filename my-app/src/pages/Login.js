import React, { Component } from 'react';

export const Login = () => {

	const REST_API_KEY = process.env.REACT_APP_REST_API_KEY
	const REDIRECT_URI = `${process.env.REACT_APP_LOCAL}/auth/kakao/callback`
	const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

	document.title="로그인"

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<div className="login-panel panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Please Sign In</h3>
						</div>
						<div className="panel-body">
							<form>
								<fieldset>
									<div className="form-group">
										<input className="form-control" placeholder="E-mail" name="email" type="email" autoFocus />
									</div>
									<div className="form-group">
										<input className="form-control" placeholder="Password" name="password" type="password" />
									</div>
									<div className="checkbox">
										<label>
											<input name="remember" type="checkbox" value="Remember Me" />Remember Me
										</label>
									</div>
									{/* <!-- Change this to a button or input when using this as a form --> */}
									<div style={{textAlign: 'center'}}>
										<a href={KAKAO_AUTH_URI}><img src="kakao_login_medium_narrow.png" alt="kakao"/></a>
									</div>
								</fieldset>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}