import { CollectionsOverview, Spinner } from 'components';
import { Collection } from 'pages';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
import { updateCollections } from 'redux/shop/shopSlice';
import { selectCollectionsFetching } from './../../redux/shop/shopSlice';

export interface ShopProps {}

const Shop: React.SFC<ShopProps> = () => {
	const routeMatch = useRouteMatch();
	const dispatch = useDispatch();
	const loading = useSelector(selectCollectionsFetching);

	useEffect(() => {
		dispatch(updateCollections());

		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='shop-page wrapper'>
			<Route exact path={`${routeMatch.path}`}>
				{loading ? <Spinner /> : <CollectionsOverview />}
			</Route>
			<Route exact path={`${routeMatch.path}/:collection`}>
				{loading ? <Spinner /> : <Collection />}
			</Route>
		</div>
	);
};

export default Shop;
