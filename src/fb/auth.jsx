import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from 'fb';

import registerUserEmailAndPassword from 'store/auth/registerUserEmailAndPassword';
import { setUserData } from 'store/auth/auth.actions';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);

	const onRegisterUserSuccess = user => {
		user.sendEmailVerification()
			.then(() => setLoading(false))
			.catch(err => console.log(err));
	}

	const registerUser = useCallback(data => {
		setLoading(true);

		dispatch(
			registerUserEmailAndPassword(
				data,
				({ user }) => onRegisterUserSuccess(user),
				error => {
					setLoading(false);
					console.log({ error });
				},
			)
		);

	}, [dispatch]);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user) {
				dispatch(setUserData(user));
			}
		});
	}, []);

	return (
		<AuthContext.Provider
			value={{
				registerUser,
				loading
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
