import { createSelector } from 'reselect';

const chatsSelector = state => state.chats;

export const chatRoomsSelector = createSelector(
	[chatsSelector],
	chats => chats.rooms
);

export const chatRoomsLoadingSelector = createSelector(
	[chatsSelector],
	chats => chats.loadingChatRooms
);
