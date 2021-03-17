import { CollectionsOverview, Spinner } from 'components';
import {
	convertCollectionsSnapshotToMap,
	firestore,
} from 'firebase/firebase.utils';
import { Collection } from 'pages';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import { updateCollections } from 'redux/shop/shopSlice';

export interface ShopProps {}

const Shop: React.SFC<ShopProps> = () => {
	const routeMatch = useRouteMatch();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const collectionRef = firestore.collection('collections');
		const unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(updateCollections(collectionsMap));
				setIsLoading(false);
			}
		);

		return () => unsubscribeFromSnapshot();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='shop-page wrapper'>
			<Route exact path={`${routeMatch.path}`}>
				{isLoading ? <Spinner /> : <CollectionsOverview />}
			</Route>
			<Route exact path={`${routeMatch.path}/:collection`}>
				{isLoading ? <Spinner /> : <Collection />}
			</Route>
		</div>
	);
};

export default Shop;
