import React from 'react';
import './styles/customButton.scss';

export interface CustomButtonProps {
	type: 'button' | 'submit';
	handleClick?: () => void;
}

const CustomButton: React.SFC<CustomButtonProps> = ({
	children,
	type = 'button',
	handleClick,
	...restProps
}) => {
	return (
		<button
			type={type}
			onClick={handleClick}
			className='custom-button'
			{...restProps}>
			{children}
		</button>
	);
};

export default CustomButton;
