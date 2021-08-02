import React from 'react';

const NavBar = () => {
	return (
		<div className="chat-navbar">
			<nav className="chat-navbar-inner">
				<div className="chat-navbar-inner-left">
					<a href="/" className="btn btn-outline-success">Settings</a>
				</div>

				<div className="chat-navbar-inner-right">
					<span className="logged-in-user">Hi User</span>

					<button
						onClick={() => {}}
						className="btn btn-sm btn-outline-danger ms-2"
						type="button"
					>
						Logout
					</button>

					<button
						onClick={() => {}}
						className="btn btn-sm btn-outline-success ms-2"
						type="button"
					>
						Login
					</button>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
