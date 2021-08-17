import {
	fetchJoinedChatsFailure,
	fetchJoinedChatsStarted,
	fetchJoinedChatsSuccess
} from 'store/chats/chats.actions';

import { selectUserUid } from 'store/auth/auth.selector';

import { firestore } from 'fb';

import FIREBASE_CONSTANTS from 'constants/firebase.constants';

const fetchJoinedChats = () => (dispatch, getState) => {

	const uid = selectUserUid(getState());

	dispatch(fetchJoinedChatsStarted());
	
	firestore
		.collection(FIREBASE_CONSTANTS.COLLECTIONS.PROFILES)
		.doc(uid)
		.get()
		.then(snapshot => {
			const { joinedChats } = snapshot.data();
			
			dispatch(fetchJoinedChatsSuccess(joinedChats));
		})
		.catch(err => dispatch(fetchJoinedChatsFailure(err)));

}

export default fetchJoinedChats;
