import { Directory } from 'components';
import * as React from 'react';
import { HomepageContainer } from './styles/homepage';

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => (
	<HomepageContainer>
		<Directory />
	</HomepageContainer>
);

export default Home;
