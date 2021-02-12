import React from 'react';

export interface NotFoundProps {}

const NotFound: React.SFC<NotFoundProps> = () => {
	return (
		<div>
			<h2>page not found</h2>
		</div>
	);
};

export default NotFound;
