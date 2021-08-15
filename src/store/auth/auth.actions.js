import AUTH_TYPES from 'store/auth/auth.types';

export const registerUserEmailAndPasswordStarted = () => ({
	type: AUTH_TYPES.REGISTER_USER_EMAIL_AND_PASSWORD_STARTED
});

export const registerUserEmailAndPasswordSuccess = payload => ({
	type: AUTH_TYPES.REGISTER_USER_EMAIL_AND_PASSWORD_SUCCESS,
	payload
});

export const registerUserEmailAndPasswordFailure = err => ({
	type: AUTH_TYPES.REGISTER_USER_EMAIL_AND_PASSWORD_FAILURE,
	payload: err
});

export const setUserData = payload => ({
	type: AUTH_TYPES.SET_USER_DATA,
	payload
});
