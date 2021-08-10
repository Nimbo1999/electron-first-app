import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import ChatSearch from 'components/ChatSearch';

import { useChatsFb } from 'fb/useChatsFb';

const JoinedChats = () => {
	const history = useHistory();
	const { url } = useRouteMatch();

	const { chats, loading } = useChatsFb();

	if (loading) return null;

	return (
		<div className="list-container">
			<ChatSearch />

			<ul className="items">
				{chats.map(chat => (
					<li
						onClick={() => history.push(`${url}/${chat.id}`)}
						className="item"
						key={chat.id}
					>
						<div className="item-status">
							<img src={chat.image} alt="Retail Admin" />

							{chat.isOnline && (<span className="status online"></span>)}
						</div>

						<p className="name-time">
							<span className="name me-2">{chat.name}</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default JoinedChats;
