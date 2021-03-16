import { CheckoutItem, StripeButton } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/cart/cartSlice';
import {
	CheckoutHeader,
	CheckoutPageContainer,
	HeaderBlock,
	TestWarning,
	Total,
} from './styles/checkoutPage';

export interface CheckoutPageProps {}

const CheckoutPage: React.SFC<CheckoutPageProps> = () => {
	const cartItems = useSelector(selectCartItems);
	const total = useSelector(selectCartTotal);
	return (
		<CheckoutPageContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} item={cartItem} />
			))}

			<Total>
				<span>${total}</span>
			</Total>
			<TestWarning>
				*Please use the following test credit cart for payments*
				<br />
				4242 4242 4242 4242 - Exp: 03/22 - CVV: 123
			</TestWarning>
			<StripeButton price={total} />
		</CheckoutPageContainer>
	);
};

export default CheckoutPage;
