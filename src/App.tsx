import { Header } from 'components';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
import { Checkout, Home, Shop, SignInSignUp } from 'pages';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { selectCurrentUser, setCurrentUser } from 'redux/user/userSlice';

const App = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);

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
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/shop' component={Shop} />
				<Route exact path='/checkout' component={Checkout} />
				<Route
					exact
					path='/signin'
					render={() => (currentUser ? <Redirect to='/' /> : <SignInSignUp />)}
				/>
				{/* 
				<Route path='*'>
					<NotFound />
				</Route> */}
			</Switch>
		</div>
	);
};

export default App;
