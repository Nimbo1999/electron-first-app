import React, { useEffect, useState } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import routes, { Route } from 'pages/router';

import NavBar from 'components/NavBar';

import { setUserData } from 'store/auth/auth.actions';

import { auth } from 'fb';
import { withAuthContext } from 'fb/auth';

const AppContent = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [ appInitialized, setAppInitialized ] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged(user => {

			if (user && user.emailVerified) {

				dispatch(setUserData(user));
				history.replace('/chat');

			} else {
				console.log('No user connected!');
			}

			if (!appInitialized) setAppInitialized(true);

		});
	}, [dispatch]);

	if (!appInitialized) return null;

	return (
		<>
			<NavBar />

			<div className="content-wrapper">
				<Switch>
					{routes.map(({ key, ...route }) => <Route key={key} {...route} />)}
				</Switch>
			</div>
		</>
	);
}

export default withAuthContext(AppContent);
