import React from 'react';
import './styles/customButton.scss';

export interface CustomButtonProps {
	type?: 'button' | 'submit';
	handleClick?: () => any;
	isGoogleSignIn?: boolean;
}

const CustomButton: React.SFC<CustomButtonProps> = ({
	children,
	type = 'button',
	handleClick,
	isGoogleSignIn,
	...restProps
}) => {
	return (
		<button
			type={type}
			onClick={handleClick}
			className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
			{...restProps}>
			{children}
		</button>
	);
};

export default CustomButton;
