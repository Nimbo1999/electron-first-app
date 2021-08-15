import { signOutUserSuccess, signOutUserFailure } from 'store/auth/auth.actions';
import { auth } from 'fb';

const signOutUser = () => dispatch => {

	auth.signOut()
		.then(() => dispatch(signOutUserSuccess()))
		.catch(() => dispatch(signOutUserFailure()));

}

export default signOutUser;
