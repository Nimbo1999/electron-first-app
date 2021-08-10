import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import AvailableChats from 'components/AvailableChats';
import SelectedChat from 'components/SelectedChat';

const Chat = () => {
	const { path } = useRouteMatch();

	return (
		<Switch>
			<Route path={ path } exact component={AvailableChats} />

			<Route path={ path + '/:id' } component={SelectedChat} />
		</Switch>
	);
}

export default Chat;
