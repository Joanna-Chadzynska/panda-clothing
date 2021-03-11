import { ReactComponent as ShoppingIcon } from 'assets/icons/shopping-bag.svg';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from 'redux/cart/cartSlice';
import './styles/cartIcon.scss';

export interface CartIconProps {}

const CartIcon: React.SFC<CartIconProps> = () => {
	const dispatch = useDispatch();
	const toggleCartDropdown = () => dispatch(toggleCartHidden());
	return (
		<div className='cart-icon' onClick={toggleCartDropdown}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};

export default CartIcon;
