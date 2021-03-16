import React from 'react';
import { CustomButtonContainer } from './styles/customButton';

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
	...restProps
}) => {
	return (
		<CustomButtonContainer type={type} onClick={handleClick} {...restProps}>
			{children}
		</CustomButtonContainer>
	);
};

export default CustomButton;
