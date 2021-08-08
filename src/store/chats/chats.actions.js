import CHATS_TYPES from 'store/chats/chats.types';

export const fetchChatRoomsStarted = () => ({
	type: CHATS_TYPES.FETCH_CHATS_STARTED
});

export const fetchChatRoomsSuccess = payload => ({
	type: CHATS_TYPES.FETCH_CHATS_SUCCESS,
	payload
});

export const fetchChatRoomsError = () => ({
	type: CHATS_TYPES.FETCH_CHATS_ERROR
});