import Settings from 'pages/Settings';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Home from 'pages/Home';

const routes = [
	{
		key: 'SettingsPage',
		path: '/settings',
		component: Settings
	},
	{
		key: 'SignInPage',
		path: '/sign-in',
		component: SignIn
	},
	{
		key: 'SignUpPage',
		path: '/sign-up',
		component: SignUp
	},
	{
		key: 'HomePage',
		path: '/',
		component: Home
	},
];

export default routes;
