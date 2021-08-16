import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import { useAuthContext } from 'fb/auth';

const SignInPage = () => {
	const [classes, setClasses] = useState(['centered-container-form', 'bg-light', 'bg-gradient']);

	const { signInUser, error, replaceHistory, authLoading } = useAuthContext();

	const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm();

	useEffect(() => {
		if (isSubmitted) {
			setClasses([...classes, 'was-validated']);
		}
	}, [isSubmitted]);

	if (authLoading) return (
		<h2>Loading...</h2>
	);

	return (
		<div className="centered-view">
			<div className="centered-container">
				<form onSubmit={handleSubmit(signInUser)} className={classes.join(' ')} noValidate>
					<div className="header">Welcome here!</div>

					<div className="subheader">Login and chat with other people!</div>

					<div className="form-container">
						<div className="form-group">
							<label htmlFor="email" className="form-label">Email</label>

							<input
								{...register('email', {
									required: 'This field is required!',
									pattern: {
										value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
										message: 'You need to type a valid E-mail',

									}
								})}
								type="email"
								className="form-control"
								id="email"
								aria-describedby="emailHelp"
								required
							/>

							<div className="d-flex flex-column">
								{errors && errors['email'] && (
									<small className="hint-text form-text text-danger">
									{errors['email'].message}
									</small>
								)}

								<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="password" className="form-label">Password</label>

							<input
								{...register('password', {
									required: 'This field is required!',
									minLength: {
										value: 4,
										message: 'Your password must have at least 4 characters!'
									},
								})}
								type="password"
								className="form-control"
								id="password"
								required
								minLength="4"
							/>
							{errors && errors['password'] && (
								<small className="hint-text form-text text-danger">
								{errors['password'].message}
								</small>
							)}
						</div>

						{ error && <div className="alert alert-danger small mt-2">{error}</div>}

						<button type="submit" className="btn btn-outline-primary mt-2">Login</button>
					</div>
				</form>

				<small className="form-text text-muted d-flex align-items-center">
					Not registered yet?

					<button
						onClick={() => replaceHistory('/sign-up')}
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
