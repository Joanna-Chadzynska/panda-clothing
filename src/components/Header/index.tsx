import { ReactComponent as Logo } from 'assets/logo/crown.svg';
import { useUserContext } from 'contexts/userContext';
import { auth } from 'firebase/firebase.utils';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.scss';
export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	const { currentUser } = useUserContext();

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
					<Link to='/signin'>SIGN IN</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
