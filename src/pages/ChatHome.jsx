import React from 'react';

import { withChatsFb } from 'fb/useChatsFb';

import JoinedChats from 'components/JoinedChats';
import Chat from 'components/Chat';

const ChatHome = () => (
	<main className="row no-gutters fh">
		<aside className="col-3 fh">
			<JoinedChats />
		</aside>

		<section className="col-9 fh">
			<Chat />
		</section>
	</main>
);

export default withChatsFb(ChatHome);