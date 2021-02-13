import { SignIn } from 'components';
import React from 'react';

export interface SignInSignUpProps {}

const SignInSignUp: React.SFC<SignInSignUpProps> = () => {
	return (
		<div>
			{' '}
			sign in sign up page
			<div>
				<SignIn />
			</div>
		</div>
	);
};

export default SignInSignUp;
