import { firestore } from 'fb';
import ErrorHandler from 'exeptions/error.handler';

import FIREBASE_CONSTANTS from 'constants/firebase.constants';

import {
	fetchChatRoomsStarted, fetchChatRoomsSuccess, fetchChatRoomsError
} from 'store/chats/chats.actions';

const fetchChatRoomsThunk = () => dispatch => {
	dispatch(fetchChatRoomsStarted());

	firestore.collection(FIREBASE_CONSTANTS.COLLECTIONS.CHATS)
		.get()
		.then(snapshot => dispatch(
			fetchChatRoomsSuccess(snapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			})))
		))
		.catch(err => {
			dispatch(fetchChatRoomsError());

			throw new ErrorHandler(err);
		});
}

export default fetchChatRoomsThunk;
