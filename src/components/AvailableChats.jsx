import React, { useState } from 'react';

const AvailableChats = () => {
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
		<main className="container-fluid">
			<div className="row mt-3">
				{ false && (
					<div className="container-fluid">
						<div className="alert alert-warning">No chats to join :(</div>
					</div>
				) }

				{chatList.map((chat, index) => (
					<div className="col-lg-3 col-md-6 mb-3" key={chat.id}>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">Chat {index + 1}</h5>

								<p className="card-text">{ `${chat.title} ${index} Description` }</p>

								<button onClick={() => {}} className="btn btn-outline-primary">Join Chat</button>
							</div>
						</div>
					</div>
				))}

			</div>
		</main>
	);
}

export default AvailableChats;