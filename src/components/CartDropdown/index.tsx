import { CartItem, CustomButton } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCartItems } from './../../redux/cart/cartSlice';
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './styles/cartDropdown';

export interface CartDropdownProps {}

const CartDropdown: React.SFC<CartDropdownProps> = () => {
	const cartItems = useSelector(selectCartItems);
	const history = useHistory();
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItems>
			<CustomButton handleClick={() => history.push('/checkout')}>
				GO TO CHECKOUT
			</CustomButton>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
