import React, { useState } from 'react';

const App = () => {

	const [chatList, setChatList] = useState([
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
		<div className="content-wrapper">
			{/* ########## NAVBAR START ############ */}
			<div className="chat-navbar">
				<nav className="chat-navbar-inner">
					<div className="chat-navbar-inner-left">
						<a href="/" className="btn btn-outline-success">Settings</a>
					</div>

					<div className="chat-navbar-inner-right">
						<span className="logged-in-user">Hi User</span>

						<button
							onClick={() => {}}
							className="btn btn-sm btn-outline-danger ms-2"
							type="button"
						>
							Logout
						</button>

						<button
							onClick={() => {}}
							className="btn btn-sm btn-outline-success ms-2"
							type="button"
						>
							Login
						</button>
					</div>
				</nav>
			</div>
			{/* ########## NAVBAR END ############ */}

			<div className="row no-gutters fh">
				<div className="col-3 fh">
					{/* ########## CHAT LIST START ############ */}
					<div className="list-container">
						<div className="chat-search-box">
							<div className="input-group">
								<input className="form-control" placeholder="Search" />
							</div>
						</div>

						<ul className="items">
							{chatList.map((chat, index) => (
								<li
									onClick={() => {}}
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
					{/* ########## CHAT LIST END ############ */}
				</div>

				<div className="col-9 fh">
					{/* ########## CHAT ANME CONTAINER START ############ */}
					<div className="chat-name-container">
						<span className="name">Choose your channel</span>

						<a href="/" className="btn btn-primary btn-sm back-button">Back</a>
					</div>
					{/* ########## CHAT NAME CONTAINER END ############ */}

					<div className="container-fluid">
						{/* ########## CHAT LIST START ############ */}
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
						{/* ########## CHAT LIST END ############ */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;