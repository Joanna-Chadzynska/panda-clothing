import { SignIn } from 'components';
import React from 'react';
import './styles/signInSignUp.scss';

export interface SignInSignUpProps {}

const SignInSignUp: React.SFC<SignInSignUpProps> = () => {
	return (
		<div className='sign-in-and-sign-up wrapper'>
			<SignIn />
		</div>
	);
};

export default SignInSignUp;
