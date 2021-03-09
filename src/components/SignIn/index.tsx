import { CustomButton, FormInput } from 'components';
import { auth, signInWithGoogle } from 'firebase/firebase.utils';
import React, { useState } from 'react';
import './styles/signIn.scss';

export interface SignInProps {}

const SignIn: React.SFC<SignInProps> = () => {
	const [signedUpUser, setSignedUpUser] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { email, password } = signedUpUser;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setSignedUpUser({
				email: '',
				password: '',
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setSignedUpUser({
			...signedUpUser,
			[name]: value,
		});
	};

	return (
		<div className='sign-in'>
			<h2 className='title'>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					label='Email'
					value={signedUpUser.email}
					handleChange={handleChange}
					required
				/>

				<FormInput
					type='password'
					name='password'
					label='Password'
					value={signedUpUser.password}
					handleChange={handleChange}
					required
				/>

				<div className='buttons'>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton isGoogleSignIn handleClick={signInWithGoogle}>
						Sign In With Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
