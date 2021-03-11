import { CollectionItem } from 'components';
import { CartItem } from 'components/CollectionItem/types';
import React from 'react';
import './styles/collectionPreview.scss';

export interface CollectionPreviewProps {
	title: string;
	items: CartItem[];
	key: number;
}

const CollectionPreview: React.SFC<CollectionPreviewProps> = ({
	title,
	items,
}) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;
