import React, { createContext, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { chatRoomsSelector, chatRoomsLoadingSelector } from 'store/chats/chats.selectors';
import fetchChatRoomsThunk from 'store/chats/fetchChatRoomsThunk';

const ChatsFbContext = createContext();

const ChatsFbProvider = ({ children }) => {
	const dispatch = useDispatch();

	const chats = useSelector(chatRoomsSelector);
	const loading = useSelector(chatRoomsLoadingSelector);

	useEffect(() => {
		dispatch(fetchChatRoomsThunk());
	}, []);

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
