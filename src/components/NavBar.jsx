import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const NavBar = () => {
	const history = useHistory();

	return (
		<div className="chat-navbar">
			<nav className="chat-navbar-inner">
				<div className="chat-navbar-inner-left">
					<button
						type="button"
						className="btn me-2 d-flex align-items-center flex-gap-1"
						onClick={history.goBack}
					>
						<i className="bi bi-arrow-left-circle-fill fs-5" /> Back
					</button>

					<button
						onClick={() => history.push('/settings')}
						className="btn btn-outline-success"
						type="button"
					>
						Settings
					</button>
				</div>

				<div className="chat-navbar-inner-right">
					<span className="logged-in-user">Hi User</span>

					<button
						onClick={() => history.push('/sign-in')}
						className="btn btn-sm btn-outline-success ms-2"
					>
						Sign In
					</button>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
