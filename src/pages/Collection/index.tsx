import { CollectionItem } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectCollection } from 'redux/shop/shopSlice';
import './styles/collection.scss';

export interface CategoryProps {}

const Collection: React.SFC<CategoryProps> = () => {
	const params: any = useParams();
	const collection = useSelector(selectCollection(params?.collection));

	return (
		<div className='collection-page'>
			<h2 className='title'>{collection?.title}</h2>
			<div className='items'>
				{collection?.items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default Collection;
