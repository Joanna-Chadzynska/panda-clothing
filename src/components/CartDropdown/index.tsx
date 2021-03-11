import { CartItem, CustomButton } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCartItems } from './../../redux/cart/cartSlice';
import './styles/cartDropdown.scss';

export interface CartDropdownProps {}

const CartDropdown: React.SFC<CartDropdownProps> = () => {
	const cartItems = useSelector(selectCartItems);
	const history = useHistory();
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<CustomButton handleClick={() => history.push('/checkout')}>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

export default CartDropdown;
