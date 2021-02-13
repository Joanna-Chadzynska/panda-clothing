import { Header } from 'components';
import { Home, NotFound, Shop, SignInSignUp } from 'pages';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/shop'>
					<Shop />
				</Route>
				<Route path='/signin'>
					<SignInSignUp />
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
