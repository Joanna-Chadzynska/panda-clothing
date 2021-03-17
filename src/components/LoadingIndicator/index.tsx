import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './styles/loading';

export interface LoadingIndicatorProps {}

const LoadingIndicator: React.SFC<LoadingIndicatorProps> = () => {
	return (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	);
};

export default LoadingIndicator;
