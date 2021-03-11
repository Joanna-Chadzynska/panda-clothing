import { CartItem } from 'components/CollectionItem/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, clearItem, removeItem } from 'redux/cart/cartSlice';
import './styles/checkoutItem.scss';

export interface CheckoutItemProps {
	item: CartItem;
}

const CheckoutItem: React.SFC<CheckoutItemProps> = ({
	item: { name, imageUrl, quantity, price },
	item,
}) => {
	const dispatch = useDispatch();
	const clearItemFromCart = (item: CartItem) => dispatch(clearItem(item));
	const increaseItem = (item: CartItem) => dispatch(addItem(item));
	const decreaseItem = (item: CartItem) => dispatch(removeItem(item));

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => decreaseItem(item)}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => increaseItem(item)}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<div className='remove-button' onClick={() => clearItemFromCart(item)}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
