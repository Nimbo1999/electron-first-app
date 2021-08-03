import React from 'react';
import { useHistory } from 'react-router-dom';

const SignInPage = () => {
	const history = useHistory();

	return (
		<div className="centered-view">
			<div className="centered-container">
				<form onSubmit={() => {}} className="centered-container-form bg-light bg-gradient">
					<div className="header">Welcome here!</div>

					<div className="subheader">Login and chat with other people!</div>

					<div className="form-container">
						<div className="form-group">
							<label htmlFor="email">Email</label>

							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
								aria-describedby="emailHelp"
							/>

							<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>

						<div className="form-group">
							<label htmlFor="password">Password</label>

							<input
								type="password"
								name="password"
								className="form-control"
								id="password"
							/>
						</div>

						{ false && <div className="alert alert-danger small mt-2">Some error</div>}

						<button type="submit" className="btn btn-outline-primary mt-2">Login</button>
					</div>
				</form>

				<small className="form-text text-muted d-flex align-items-center">
					Not registered yet?

					<button
						onClick={() => history.replace('/sign-up')}
						className="btn btn-link"
						type="button"
					>
						Register
					</button>
				</small>
			</div>
		</div>
	);
}

export default SignInPage;
