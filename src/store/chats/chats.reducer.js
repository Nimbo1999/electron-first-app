import CHATS_TYPES from 'store/chats/chats.types';

const INITIAL_STATE = {
	rooms: [],
	currentChat: null,
	joinedChats: [],
	loadingChatRooms: false,
	loadingJoinedChats: false
}

const chatsReducer = (state = INITIAL_STATE, action) => {
	if (!action.type) return state;

	switch (action.type) {
		case CHATS_TYPES.JOIN_CHAT: {
			return {
				...state,
				currentChat: action.payload
			};
		}

		case CHATS_TYPES.FETCH_JOINED_CHATS_FAILURE:
		case CHATS_TYPES.FETCH_JOINED_CHATS_STARTED: {
			return {
				...state,
				loadingJoinedChats: true,
			};
		}

		case CHATS_TYPES.FETCH_JOINED_CHATS_SUCCESS: {
			return {
				...state,
				loadingJoinedChats: false,
				joinedChats: action.payload
			};
		}

		case CHATS_TYPES.FETCH_CHATS_STARTED: {
			return {
				...state,
				loadingChatRooms: true,
			};
		}

		case CHATS_TYPES.FETCH_CHATS_SUCCESS: {
			return {
				...state,
				loadingChatRooms: false,
				rooms: action.payload
			};
		}

		case CHATS_TYPES.FETCH_CHATS_ERROR: {
			return {
				...state,
				loadingChatRooms: false,
				rooms: [],
			};
		}

		default: {
			return state;
		}
	}
}

export default chatsReducer;
