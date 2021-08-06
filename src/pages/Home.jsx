import React from 'react';

import JoinedChats from 'components/JoinedChats';
import Chat from 'components/Chat';

const Home = () => {
	return (
		<main className="row no-gutters fh">
			<aside className="col-3 fh">
				<JoinedChats />
			</aside>

			<section className="col-9 fh">
				<Chat />
			</section>
		</main>
	);
}

export default Home;