import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './styles/stripeButton.scss';

export interface StripeButtonProps {
	price: number;
}

const StripeButton: React.SFC<StripeButtonProps> = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
	const onToken = (token: any) => {
		console.log(token);
		alert('Payment Successful');
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='Panda Clothes Ltd.'
			billingAddress
			shippingAddress
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
			image='https://svgshare.com/i/CUz.svg'
		/>
	);
};

export default StripeButton;
