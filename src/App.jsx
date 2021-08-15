import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

import ErrorBoundary from 'exeptions/ErrorBoundary';

import AppContent from 'pages/AppContent';

const App = () => {

	return (
		<ErrorBoundary>
			<HashRouter>
				<Suspense fallback={<>Loading...</>}>
					<AppContent />
				</Suspense>
			</HashRouter>
		</ErrorBoundary>
	);
}

export default App;
