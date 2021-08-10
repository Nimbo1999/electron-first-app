import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { useChatsFb } from 'fb/useChatsFb';

import SectionTitle from 'components/SectionTitle';

const AvailableChats = () => {
	const { url } = useRouteMatch();
	const history = useHistory();

	const { chats } = useChatsFb();

	return (
		<main className="container-fluid">
			<SectionTitle />

			<div className="row mt-3">
				{ false && (
					<div className="container-fluid">
						<div className="alert alert-warning">No chats to join :(</div>
					</div>
				) }

				{chats.map(chat => (
					<div className="col-lg-3 col-md-6 mb-3" key={chat.id}>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{chat.name}</h5>

								<p className="card-text">{chat.description}</p>

								<button onClick={() => history.push(`${url}/${chat.id}`)} className="btn btn-outline-primary">
									Join Chat
								</button>
							</div>
						</div>
					</div>
				))}

			</div>
		</main>
	);
}

export default AvailableChats;
