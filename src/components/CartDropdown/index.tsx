import { CustomButton } from 'components';
import React from 'react';
import './styles/cartDropdown.scss';

export interface CartDropdownProps {}

const CartDropdown: React.SFC<CartDropdownProps> = () => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'></div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
