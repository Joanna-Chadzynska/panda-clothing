import { CustomButton } from 'components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from 'redux/cart/cartSlice';
import './styles/collectionItem.scss';
import { CartItem } from './types';

export interface CollectionItemProps {
	item: CartItem;
}

const CollectionItem: React.SFC<CollectionItemProps> = ({ item }) => {
	const dispatch = useDispatch();
	const addItemToCart = (item: any) => dispatch(addItem(item));
	const { imageUrl, name, price } = item;
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton inverted handleClick={() => addItemToCart(item)}>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;
