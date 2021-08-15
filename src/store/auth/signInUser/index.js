import {
	setUserData, signInUserFailure
} from 'store/auth/auth.actions';

import { auth } from 'fb';

const signInUser = ({ email, password }, onSuccess, onError) => dispatch => {

	auth.signInWithEmailAndPassword(email, password)
		.then(({ user }) => {
			dispatch(setUserData(user));

			if (onSuccess && typeof onSuccess === 'function') onSuccess(user);
		})
		.catch(err => {
			console.error(err);

			dispatch(signInUserFailure(err));

			if (onError && typeof onError === 'function') onError(user);
		});

}

export default signInUser;
