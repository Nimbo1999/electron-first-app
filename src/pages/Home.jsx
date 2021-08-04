import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import JoinedChats from 'components/JoinedChats';
import Chat from 'components/Chat';

const Home = () => {
	const history = useHistory();
	const { url } = useRouteMatch();

	return (
		<main className="row no-gutters fh">
			<aside className="col-3 fh">
				<JoinedChats />
			</aside>

			<section className="col-9 fh">
				{/* ########## CHAT ANME CONTAINER START ############ */}
				<header className="chat-name-container">
					{history.location.pathname !== url && (
						<button
							className="btn btn-sm back-button"
							onClick={history.goBack}
						>
							<i className="bi bi-arrow-left-circle-fill fs-5 text-primary" />
						</button>
					)}

					<span className="name">Choose your channel</span>
				</header>
				{/* ########## CHAT NAME CONTAINER END ############ */}

				<Chat />
			</section>
		</main>
	);
}

export default Home;