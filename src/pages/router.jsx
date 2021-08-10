import React from 'react';
import { Route as RRDRoute, Redirect } from 'react-router-dom';

import Settings from 'pages/Settings';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import ChatHome from 'pages/ChatHome';

const routes = [
	{
		isProtected: true,
		key: 'AppPage',
		path: '/chat',
		component: ChatHome
	},
	{
		key: 'SettingsPage',
		path: '/settings',
		component: Settings
	},
	{
		key: 'SignUpPage',
		path: '/sign-up',
		component: SignUp
	},
	{
		key: 'SignInPage',
		path: '/',
		component: SignIn
	},
];

const Route = ({ isProtected = false, component: Component, ...props }) => {

	console.log({ isProtected, ...props });

	if (isProtected) return (
		<RRDRoute {...props}>
			<Redirect to="/" />
		</RRDRoute>
	);

	return (
		<RRDRoute {...props} component={Component} />
	);
}

export { routes as default, Route };
