import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

const SectionTitle = ({ title = 'Choose your channel' }) => {
	const history = useHistory();
	const { url } = useRouteMatch();

	return (
		<header className="chat-name-container">
			{history.location.pathname !== url && (
				<button
					className="btn btn-sm back-button"
					onClick={history.goBack}
				>
					<i className="bi bi-arrow-left-circle-fill fs-5 text-primary" />
				</button>
			)}

			<span className="name">{title}</span>
		</header>
	);
}

export default SectionTitle;
