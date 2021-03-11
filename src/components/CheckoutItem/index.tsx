import { CartItem } from 'components/CollectionItem/types';
import React from 'react';
import './styles/checkoutItem.scss';

export interface CheckoutItemProps {
	item: CartItem;
}

const CheckoutItem: React.SFC<CheckoutItemProps> = ({
	item: { name, imageUrl, quantity, price },
}) => {
	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>{quantity}</span>
			<span className='price'>{price}</span>
			<div className='remove-button'>&#10005;</div>
		</div>
	);
};

export default CheckoutItem;
