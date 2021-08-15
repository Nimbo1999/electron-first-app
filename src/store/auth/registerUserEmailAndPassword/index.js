import {
	registerUserEmailAndPasswordStarted,
	registerUserEmailAndPasswordFailure,
	registerUserEmailAndPasswordSuccess
} from 'store/auth/auth.actions';

import { auth } from 'fb';

const registerUserEmailAndPasswordThunk = ({ email, password }, onSuccess, onError) => dispatch => {
	dispatch(registerUserEmailAndPasswordStarted());

	auth.createUserWithEmailAndPassword(email, password)
		.then(response => {
			dispatch(registerUserEmailAndPasswordSuccess(response));

			if (onSuccess && typeof onSuccess === 'function') onSuccess(response);
		})
		.catch(error => {
			dispatch(registerUserEmailAndPasswordFailure(error));

			if (onErro && typeof onErro === 'function') onError(error);
		});
}

export default registerUserEmailAndPasswordThunk;
