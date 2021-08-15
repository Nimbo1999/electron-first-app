import React, { createContext, useContext, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import registerUserEmailAndPassword from 'store/auth/registerUserEmailAndPassword';
import signOutUserAction from 'store/auth/signOutUser';
import signInUserAction from 'store/auth/signInUser';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [authLoading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const signOutUser = useCallback(() => dispatch(
		signOutUserAction()
	), [dispatch]);

	const onRegisterUserSuccess = ({ user }) => {
		user.sendEmailVerification()
			.then(() => setLoading(false))
			.catch(err => console.log(err));
	}

	const registerUser = useCallback(data => {
		setLoading(true);

		dispatch(
			registerUserEmailAndPassword(
				data,
				onRegisterUserSuccess,
				err => {
					setLoading(false);
					console.log(err);
				},
			)
		);

	}, [dispatch]);

	const onSignInSuccess = useCallback(({ emailVerified }) => {

		if (emailVerified) {
			if (history && history.replace) history.replace('/chat');
		} else {
			setError('Você deve verificar o seu e-mail antes de fazer o login com essa conta!');
			signOutUser();
		}

	}, [signOutUser, history]);

	const signInUser = useCallback(data => dispatch(
		signInUserAction(data, onSignInSuccess)
	), [dispatch]);

	return (
		<AuthContext.Provider
			value={{
				registerUser,
				signOutUser,
				signInUser,
				error,
				authLoading
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

const useAuthContext = () => useContext(AuthContext);

const withAuthContext = Component => () => (
	<AuthContextProvider>
		<Component />
	</AuthContextProvider>
);

export { useAuthContext, withAuthContext }
