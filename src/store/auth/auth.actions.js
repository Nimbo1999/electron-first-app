import AUTH_TYPES from 'store/auth/auth.types';

export const registerUserEmailAndPasswordStarted = () => ({
	type: AUTH_TYPES.REGISTER_USER_EMAIL_AND_PASSWORD_STARTED
});

export const registerUserEmailAndPasswordSuccess = () => ({
	type: AUTH_TYPES.REGISTER_USER_EMAIL_AND_PASSWORD_SUCCESS,
});

export const registerUserEmailAndPasswordFailure = err => ({
	type: AUTH_TYPES.REGISTER_USER_EMAIL_AND_PASSWORD_FAILURE,
	payload: err
});

export const setUserData = payload => ({
	type: AUTH_TYPES.SET_USER_DATA,
	payload
});

export const signOutUserSuccess = () => ({
	type: AUTH_TYPES.SIGN_OUT_SUCCESS
});

export const signOutUserFailure = () => ({
	type: AUTH_TYPES.SIGN_OUT_FAILURE
});

export const signInUserFailure = () => ({
	type: AUTH_TYPES.SIGN_IN_FAILURE
});
