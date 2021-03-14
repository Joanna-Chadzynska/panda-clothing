import { MenuItem } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDirectory } from './../../redux/directory/directorySlice';
import './styles/directory.scss';

export interface DirectoryMenuProps {}

const DirectoryMenu: React.SFC<DirectoryMenuProps> = () => {
	const sections = useSelector(selectDirectory);

	return (
		<div className='directory-menu'>
			{sections.map((section) => (
				<MenuItem key={section.id} {...section} />
			))}
		</div>
	);
};

export default DirectoryMenu;
