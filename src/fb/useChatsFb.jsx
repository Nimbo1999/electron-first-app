import React, { createContext, useContext, useState, useEffect } from 'react';

import firestore from './index';

const ChatsFbContext = createContext();

const ChatsFbProvider = ({ children }) => {
	const [chats, setChats] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		firestore.collection('chats')
			.get()
			.then((snapshot) => {

				const data = snapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				}));

				setChats(data);
				setLoading(false);
			})
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
