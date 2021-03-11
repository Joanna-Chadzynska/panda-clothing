import { ReactComponent as Logo } from 'assets/logo/crown.svg';
import { CartDropdown, CartIcon } from 'components';
import { auth } from 'firebase/firebase.utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartHidden } from 'redux/cart/cartSlice';
import { selectCurrentUser } from 'redux/user/userSlice';
import './styles/header.scss';
export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	const currentUser = useSelector(selectCurrentUser);
	const cartHidden = useSelector(selectCartHidden);
	return (
		<div className='header wrapper'>
			<Link className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{cartHidden ? null : <CartDropdown />}
		</div>
	);
};

export default Header;
