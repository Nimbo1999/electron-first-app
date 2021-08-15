import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from 'store/auth/auth.selector';

import { useAuthContext } from 'fb/auth';

const NavBar = () => {
	const history = useHistory();

	const { signOutUser } = useAuthContext();

	const user = useSelector(selectUser);

	if (!user) return null;

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
					<button
						onClick={signOutUser}
						className="btn btn-sm btn-outline-danger ms-2"
					>
						Sign Out
					</button>

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
