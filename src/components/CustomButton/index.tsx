import React from 'react';
import './styles/customButton.scss';

export interface CustomButtonProps {
	type?: 'button' | 'submit';
	handleClick?: () => any;
	isGoogleSignIn?: boolean;
	inverted?: boolean;
}

const CustomButton: React.SFC<CustomButtonProps> = ({
	children,
	type = 'button',
	handleClick,
	isGoogleSignIn,
	inverted,
	...restProps
}) => {
	return (
		<button
			type={type}
			onClick={handleClick}
			className={`${inverted ? 'inverted' : ''} ${
				isGoogleSignIn ? 'google-sign-in' : ''
			} custom-button`}
			{...restProps}>
			{children}
		</button>
	);
};

export default CustomButton;
