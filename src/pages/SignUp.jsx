import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuthContext, withAuthContext } from 'fb/auth';

const SignUpPage = () => {
	const history = useHistory();

	const { registerUser, loading } = useAuthContext();

	const [classes, setClasses] = useState(['centered-container-form', ' bg-light', 'bg-gradient']);

	const { register, handleSubmit, formState: { errors, isSubmitted, isSubmitSuccessful } } = useForm();

	useEffect(() => {
		if (isSubmitted) {
			setClasses([...classes, 'was-validated'])
		}
	}, [isSubmitted]);

	return (
		<div className="centered-view">
			<div className="centered-container">
				<form onSubmit={handleSubmit(registerUser)} className={classes.join(' ')} noValidate>
					<div className="header">Create an account</div>

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
									<small id="emailHelp" className="hint-text form-text text-danger">
									{errors['email'].message}
									</small>
								)}

								<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="username" className="form-label">Username</label>

							<input
								{...register('username')}
								type="text"
								className="form-control"
								id="username"
							/>

							{errors && errors['username'] && (
								<small className="hint-text form-text text-danger">
									{errors['username'].message}
								</small>
							)}
						</div>

						<div className="form-group">
							<label htmlFor="avatar" className="form-label">Avatar</label>

							<input
								{...register('avatar')}
								type="text"
								name="avatar"
								className="form-control"
								id="avatar"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="password">Password</label>

							<input
								{...register('password', {
									required: 'This field is required!',
									minLength: {
										value: 4,
										message: 'Your password must have at least 4 characters!'
									},
								})}
								name="password"
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

						{ isSubmitted && !isSubmitSuccessful && (
							<div className="alert alert-danger small mt-2">
								This form has errors
							</div>
						)}

						<button
							type="submit"
							className="btn btn-outline-primary mt-2"
							disabled={ loading }
						>
							Register
						</button>
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

export default withAuthContext(SignUpPage);
