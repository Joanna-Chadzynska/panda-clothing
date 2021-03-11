import { ReactComponent as ShoppingIcon } from 'assets/icons/shopping-bag.svg';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, toggleCartHidden } from 'redux/cart/cartSlice';
import './styles/cartIcon.scss';

export interface CartIconProps {}

const CartIcon: React.SFC<CartIconProps> = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const toggleCartDropdown = () => dispatch(toggleCartHidden());

	return (
		<div className='cart-icon' onClick={toggleCartDropdown}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{cartItems.length}</span>
		</div>
	);
};

export default CartIcon;
