import { CollectionPreview } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionForPreview } from 'redux/shop/shopSlice';
import './styles/collectionsOverview.scss';

export interface CollectionsOverviewProps {}

const CollectionsOverview: React.SFC<CollectionsOverviewProps> = () => {
	const collections = useSelector(selectCollectionForPreview);

	return (
		<div className='collections-overview'>
			{collections.map((collection) => (
				<CollectionPreview key={collection.id} {...collection} />
			))}
		</div>
	);
};

export default CollectionsOverview;
