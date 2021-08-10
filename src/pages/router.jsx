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
		key: 'SignUpPage',
		path: '/sign-up',
		component: SignUp
	},
	{
		key: 'AppPage',
		path: '/chat',
		component: Home
	},
	{
		key: 'SignInPage',
		path: '/',
		component: SignIn
	},
];

export default routes;
