import React, { useState } from 'react';

const SelectedChat = () => {

	const [chats] = useState([
		{
			user: 'me',
			profileImage: 'https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png',
			name: 'Matheus Lopes',
			message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an ',
			date: new Date().toISOString(),
		},
		{
			user: 'Suzana',
			profileImage: 'https://i.dlpng.com/static/png/7105396_preview.png',
			name: 'Suzana Barreto Lopes',
			message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it',
			date: new Date().toISOString(),
		},
		{
			user: 'me',
			profileImage: 'https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png',
			name: 'Matheus Lopes',
			message: 'it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web site',
			date: new Date().toISOString(),
		},
		{
			user: 'Suzana',
			profileImage: 'https://i.dlpng.com/static/png/7105396_preview.png',
			name: 'Suzana Barreto Lopes',
			message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin',
			date: new Date().toISOString(),
		},
	]);

	return (
		<div className="chat-container">
			<ul className="chat-box chatContainerScroll">
				{chats.map(chat => (
					<li className={ chat.user === 'me' ? 'chat-right' : 'chat-left' }>
						<div className="chat-avatar">
							<img
							src={chat.profileImage}
							alt="Retail Admin" />

							<div className="chat-name">{chat.name}</div>
						</div>

						<div className="chat-text-wrapper">
							<span className="chat-text">{chat.message}</span>

							<span className="chat-spacer" />

							<div className="chat-hour">{new Date(chat.date).toLocaleDateString()} - {new Date(chat.date).toLocaleTimeString()}</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SelectedChat;
