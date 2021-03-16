import { ReactComponent as ShoppingIcon } from 'assets/icons/shopping-bag.svg';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItemsCount, toggleCartHidden } from 'redux/cart/cartSlice';
import { CartIconContainer, ItemCount } from './styles/cartIcon';

export interface CartIconProps {}

const CartIcon: React.SFC<CartIconProps> = () => {
	const dispatch = useDispatch();
	const itemsCount = useSelector(selectItemsCount);

	const toggleCartDropdown = () => dispatch(toggleCartHidden());

	return (
		<CartIconContainer onClick={toggleCartDropdown}>
			<ShoppingIcon className='shopping-icon' />
			<ItemCount>{itemsCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
