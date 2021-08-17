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

export const fetchJoinedChatsStarted = () => ({
	type: CHATS_TYPES.FETCH_JOINED_CHATS_STARTED
});

export const fetchJoinedChatsSuccess = payload => ({
	type: CHATS_TYPES.FETCH_JOINED_CHATS_SUCCESS,
	payload
});

export const fetchJoinedChatsFailure = payload => ({
	type: CHATS_TYPES.FETCH_JOINED_CHATS_FAILURE,
	payload
});
