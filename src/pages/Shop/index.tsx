import { CollectionPreview } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollections } from 'redux/shop/shopSlice';

export interface ShopProps {}

const Shop: React.SFC<ShopProps> = () => {
	const collections = useSelector(selectCollections);
	return (
		<div className='shop-page wrapper'>
			{collections.map((collection) => (
				<CollectionPreview key={collection.id} {...collection} />
			))}
		</div>
	);
};

export default Shop;
