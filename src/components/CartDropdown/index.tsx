import { CartItem, CustomButton } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from './../../redux/cart/cartSlice';
import './styles/cartDropdown.scss';

export interface CartDropdownProps {}

const CartDropdown: React.SFC<CartDropdownProps> = () => {
	const cartItems = useSelector(selectCartItems);
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
