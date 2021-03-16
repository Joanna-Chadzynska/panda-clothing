import { ReactComponent as Logo } from 'assets/logo/crown.svg';
import { CartDropdown, CartIcon } from 'components';
import { auth } from 'firebase/firebase.utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartHidden } from 'redux/cart/cartSlice';
import { selectCurrentUser } from 'redux/user/userSlice';
import {
	HeaderContainer,
	LogoContainer,
	Option,
	OptionButton,
	OptionsContainer,
} from './styles/header';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	const currentUser = useSelector(selectCurrentUser);
	const cartHidden = useSelector(selectCartHidden);
	return (
		<HeaderContainer className='wrapper'>
			<LogoContainer to='/'>
				<Logo />
			</LogoContainer>
			<OptionsContainer>
				<Option to='/shop'>SHOP</Option>
				<Option to='/shop'>CONTACT</Option>
				{currentUser ? (
					<OptionButton as='div' onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionButton>
				) : (
					<Option to='/signin'>SIGN IN</Option>
				)}
				<CartIcon />
			</OptionsContainer>
			{cartHidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

export default Header;
