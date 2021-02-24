import { ReactComponent as Logo } from 'assets/logo/crown.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/header.scss';
export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
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
			</div>
		</div>
	);
};

export default Header;
