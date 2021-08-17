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
					{user.photoURL && (
						<img src={user.photoURL} className="avatar me-2" />
					)}

					{user.displayName && (
						<strong style={{ alignSelf: 'center' }} className="me-4">{user.displayName}</strong>
					)}

					<button
						onClick={signOutUser}
						className="btn btn-sm btn-outline-danger ms-4 text-uppercase"
					>
						Sign Out
					</button>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
