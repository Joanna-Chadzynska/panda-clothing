import { Home, NotFound, Shop } from 'pages';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/shop'>
					<Shop />
				</Route>
				{/* <Route path='/shop/:id'>
					<HatsPage />
				</Route> */}
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
