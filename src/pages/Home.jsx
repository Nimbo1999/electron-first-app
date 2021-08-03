import React from 'react';

import JoinedChats from 'components/JoinedChats';
import AvailableChats from 'components/AvailableChats';

const Home = () => {
	return (
		<main className="row no-gutters fh">
			<aside className="col-3 fh">
				<JoinedChats />
			</aside>

			<section className="col-9 fh">
				{/* ########## CHAT ANME CONTAINER START ############ */}
				<header className="chat-name-container">
					<span className="name">Choose your channel</span>

					<a href="/" className="btn btn-primary btn-sm back-button">Back</a>
				</header>
				{/* ########## CHAT NAME CONTAINER END ############ */}

				<AvailableChats />
			</section>
		</main>
	);
}

export default Home;