import { CollectionsOverview } from 'components';
import { Collection } from 'pages';
import React from 'react';
import { Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';
export interface ShopProps {}

const Shop: React.SFC<ShopProps> = () => {
	const routeMatch = useRouteMatch();

	return (
		<div className='shop-page wrapper'>
			<Route exact path={`${routeMatch.path}`}>
				<CollectionsOverview />
			</Route>
			<Route exact path={`${routeMatch.path}/:collection`}>
				<Collection />
			</Route>
		</div>
	);
};

export default Shop;
