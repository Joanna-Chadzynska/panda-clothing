import { CollectionPreview } from 'components';
import SHOP_DATA from 'data/shop.data';
import React from 'react';

export interface ShopProps {}

const Shop: React.SFC<ShopProps> = () => {
	const collections = SHOP_DATA;
	return (
		<div className='shop-page wrapper'>
			{collections.map((collection) => (
				<CollectionPreview key={collection.id} {...collection} />
			))}
		</div>
	);
};

export default Shop;
