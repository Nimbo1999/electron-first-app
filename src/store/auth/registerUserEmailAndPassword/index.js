import {
	registerUserEmailAndPasswordStarted,
	registerUserEmailAndPasswordFailure,
	registerUserEmailAndPasswordSuccess
} from 'store/auth/auth.actions';

import { auth, firestore } from 'fb';
import FIREBASE_CONSTANTS from 'constants/firebase.constants';

const registerUserEmailAndPasswordThunk = ({ email, password, username, avatar }, onSuccess, onError) => dispatch => {
	dispatch(registerUserEmailAndPasswordStarted());

	const handleError = error => {
		dispatch(registerUserEmailAndPasswordFailure(error));

		if (onErro && typeof onErro === 'function') onError(error);
	}

	auth.createUserWithEmailAndPassword(email, password)
		.then(response => {

			if (response && response.user) {

				firestore.collection(FIREBASE_CONSTANTS.COLLECTIONS.PROFILES)
				.doc(response.user.uid)
				.set({ joinedChats: [] });

				response.user.updateProfile({
					displayName: username,
					photoUrl: avatar
				}).then(() => {

					dispatch(registerUserEmailAndPasswordSuccess());

					if (onSuccess && typeof onSuccess === 'function') onSuccess(response);

				}).catch(handleError);

				return;
			}

			dispatch(registerUserEmailAndPasswordSuccess());

			if (onSuccess && typeof onSuccess === 'function') onSuccess(response);
		})
		.catch(handleError);
}

export default registerUserEmailAndPasswordThunk;
