import { Directory } from 'components';
import * as React from 'react';
import './styles/homepage.scss';
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
	return (
		<div className='homepage'>
			<Directory />
		</div>
	);
};

export default Home;
