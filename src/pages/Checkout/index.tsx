import { CheckoutItem, StripeButton } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/cart/cartSlice';
import './styles/checkout.scss';

export interface CheckoutPageProps {}

const CheckoutPage: React.SFC<CheckoutPageProps> = () => {
	const cartItems = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);
	return (
		<div className='checkout-page '>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} item={cartItem} />
			))}

			<div className='total'>
				<span>${total}</span>
			</div>
			<div className='test-warning'>
				*Please use the following test credit cart for payments*
				<br />
				4242 4242 4242 4242 - Exp: 03/22 - CVV: 123
			</div>
			<StripeButton price={total} />
		</div>
	);
};

export default CheckoutPage;
