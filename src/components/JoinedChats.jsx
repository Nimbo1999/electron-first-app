import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import ChatSearch from 'components/ChatSearch';

const JoinedChats = () => {
	const history = useHistory();
	const { url } = useRouteMatch();

	const [chatList] = useState([
		{
			id: 'a',
			image: 'https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg',
			title: 'Some Chat',
			isOnline: true,
		},
		{
			id: 'b',
			image: 'https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg',
			title: 'Some Chat',
			isOnline: true,
		},
		{
			id: 'c',
			image: 'https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg',
			title: 'Some Chat',
			isOnline: true,
		},
		{
			id: 'd',
			image: 'https://banner2.cleanpng.com/20180627/qvc/kisspng-the-legend-of-zelda-majora-s-mask-discord-compute-discord-icon-5b3371b7b55eb4.6840271215300981037429.jpg',
			title: 'Some Chat',
			isOnline: true,
		},
	]);

	return (
		<div className="list-container">
			<ChatSearch />

			<ul className="items">
				{chatList.map((chat, index) => (
					<li
						onClick={() => history.push(url + '/chat')}
						className="item"
						key={chat.id}
					>
						<div className="item-status">
							<img src={chat.image} alt="Retail Admin" />

							{chat.isOnline && (<span className="status online"></span>)}
						</div>

						<p className="name-time">
							<span className="name me-2">{`${chat.title} ${index + 1}`}</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default JoinedChats;
