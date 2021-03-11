import { ReactComponent as ShoppingIcon } from 'assets/icons/shopping-bag.svg';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItemsCount, toggleCartHidden } from 'redux/cart/cartSlice';
import './styles/cartIcon.scss';

export interface CartIconProps {}

const CartIcon: React.SFC<CartIconProps> = () => {
	const dispatch = useDispatch();
	const itemsCount = useSelector(selectItemsCount);

	const toggleCartDropdown = () => dispatch(toggleCartHidden());

	return (
		<div className='cart-icon' onClick={toggleCartDropdown}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{itemsCount}</span>
		</div>
	);
};

export default CartIcon;
