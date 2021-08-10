import React, { Suspense } from 'react';
import { HashRouter, Switch } from 'react-router-dom';

import ErrorBoundary from 'exeptions/ErrorBoundary';

import routes, { Route } from 'pages/router';

import NavBar from 'components/NavBar';

const App = () => {
	return (
		<ErrorBoundary>
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
		</ErrorBoundary>
	);
}

export default App;