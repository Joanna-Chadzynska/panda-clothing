import { Header } from 'components';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
import { Home, NotFound, Shop, SignInSignUp } from 'pages';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useUserContext } from './contexts/userContext';

const App = () => {
	const { setCurrentUser, currentUser } = useUserContext();

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef?.onSnapshot((snapshot) => {
					const currUser = {
						id: snapshot.id,
						user: snapshot.data(),
					};

					if (setCurrentUser) {
						setCurrentUser(currUser);
					}
				});
			}
			if (setCurrentUser) {
				setCurrentUser(null);
			}
		});
		return () => unsubscribeFromAuth();
	}, [setCurrentUser]);

	console.log({ currentUser });

	return (
		<>
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
		</>
	);
};

export default App;
