import React, { createContext, useContext, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { chatRoomsSelector, chatRoomsLoadingSelector } from 'store/chats/chats.selectors';

import fetchChatRoomsThunk from 'store/chats/fetchChatRoomsThunk';
import fetchJoinedChatsThunk from 'store/chats/fetchJoinedChats';

const ChatsFbContext = createContext();

const ChatsFbProvider = ({ children }) => {
	const dispatch = useDispatch();

	const chats = useSelector(chatRoomsSelector);
	const loading = useSelector(chatRoomsLoadingSelector);

	const fetchChatRooms = useCallback(() => dispatch(fetchChatRoomsThunk()), [dispatch]);
	const fetchJoinedChats = useCallback(() => dispatch(fetchJoinedChatsThunk()), [dispatch]);

	useEffect(() => {

		fetchChatRooms();

		fetchJoinedChats();

	}, [fetchChatRooms, fetchJoinedChats]);

	return (
		<ChatsFbContext.Provider
			value={{
				chats,
				loading
			}}
		>
			{children}
		</ChatsFbContext.Provider>
	);
}

const useChatsFb = () => useContext(ChatsFbContext);

const withChatsFb = Component => () => (
	<ChatsFbProvider>
		<Component />
	</ChatsFbProvider>
);

export { useChatsFb, withChatsFb }
