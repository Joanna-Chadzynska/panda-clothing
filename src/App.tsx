import { Header } from 'components';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
import { Home, NotFound, Shop, SignInSignUp } from 'pages';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { setCurrentUser } from 'redux/user/userSlice';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef?.onSnapshot((snapshot) => {
					const currUser = {
						id: snapshot.id,
						user: snapshot.data(),
					};

					dispatch(setCurrentUser(currUser));
				});
			}
			dispatch(setCurrentUser(null));
		});
		return () => unsubscribeFromAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
