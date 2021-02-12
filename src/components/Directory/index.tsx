import { MenuItem } from 'components';
import SECTIONS_DATA from 'data/sections.data';
import React from 'react';
import './styles/directory.scss';

export interface DirectoryMenuProps {}

const DirectoryMenu: React.SFC<DirectoryMenuProps> = () => {
	return (
		<div className='directory-menu'>
			{SECTIONS_DATA.map((section) => (
				<MenuItem key={section.id} {...section} />
			))}
		</div>
	);
};

export default DirectoryMenu;
