import React from 'react';
import './styles/collectionItem.scss';

export interface CollectionItemProps {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
}

const CollectionItem: React.SFC<CollectionItemProps> = ({
	imageUrl,
	name,
	id,
	price,
}) => {
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;
