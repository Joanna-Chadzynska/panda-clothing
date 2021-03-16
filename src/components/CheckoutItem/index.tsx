import { CartItem } from 'components/CollectionItem/types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, clearItem, removeItem } from 'redux/cart/cartSlice';
import {
	Arrow,
	CheckoutItemContainer,
	ImageContainer,
	Name,
	Price,
	Quantity,
	RemoveButton,
	Value,
} from './styles/checkoutItem';

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
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt='item' />
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={() => decreaseItem(item)}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={() => increaseItem(item)}>&#10095;</Arrow>
			</Quantity>
			<Price>{price}</Price>
			<RemoveButton onClick={() => clearItemFromCart(item)}>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
