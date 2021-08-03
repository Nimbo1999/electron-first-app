import React from 'react';
import { useHistory } from 'react-router-dom';

const SignUpPage = () => {
	const history = useHistory();

	return (
		<div className="centered-view">
			<div className="centered-container">
				<form onSubmit={() => {}} className="centered-container-form bg-light bg-gradient">
					<div className="header">Create an account</div>

					<div className="form-container">
						<div className="form-group">
							<label htmlFor="email">Email</label>

							<input
								type="email"
								className="form-control"
								name="email"
								id="email"
								aria-describedby="emailHelp"
							/>

							<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
						</div>

						<div className="form-group">
							<label htmlFor="username">Username</label>

							<input
								type="text"
								name="username"
								className="form-control"
								id="username"
								aria-describedby="emailHelp"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="avatar">Avatar</label>

							<input
								type="text"
								name="avatar"
								className="form-control"
								id="avatar"
								aria-describedby="emailHelp"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="password">Password</label>

							<input
								name="password"
								type="password"
								className="form-control"
								id="password"
							/>
						</div>

						{ false && <div className="alert alert-danger small mt-2">Some Error</div>}
						<button type="submit" className="btn btn-outline-primary mt-2">Register</button>
					</div>
				</form>

				<small className="form-text text-muted d-flex align-items-center">
					Already registered?

					<button
						onClick={() => history.replace('/sign-in')}
						className="btn btn-link"
						type="button"
					>
						Login
					</button>
				</small>
			</div>
		</div>
	);
}

export default SignUpPage;
