import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import routes from 'pages/router';

import NavBar from 'components/NavBar';

const App = () => {
	return (
		<HashRouter>
			<Suspense fallback={<>Loading...</>}>
				<NavBar />

				<div className="content-wrapper">
					<Switch>
						{routes.map(({ key, ...route }) => <Route key={key} {...route} />)}
					</Switch>
				</div>
			</Suspense>
		</HashRouter>
	);
}

export default App;