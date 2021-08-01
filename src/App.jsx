import React, { useState, useCallback } from 'react';

import { olaMundo } from 'utils/test';

const App = () => {
	const [count, setCount] = useState(0);

	const sendNotification = useCallback(() => {
		console.log(olaMundo('abc123'));
		return electron.notificationApi.sendNotification('Olá meu amigo!');
	}, []);

	return (
		<div>
			<h1>Olá mundo!</h1>

			<p>Você clicou no botão {count} vezes!</p>

			<button onClick={() => setCount(count + 1)} type="button">
				Button
			</button>

			<button onClick={sendNotification} type="button">
				Send Notification
			</button>
		</div>
	)
}

export default App;