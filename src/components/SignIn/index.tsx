import { CustomButton, FormInput } from 'components';
import React, { useState } from 'react';
import './styles/signIn.scss';

export interface SignInProps {}

const SignIn: React.SFC<SignInProps> = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setUser({
			email: '',
			password: '',
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					label='Email'
					value={user.email}
					handleChange={handleChange}
					required
				/>

				<FormInput
					type='password'
					name='password'
					label='Password'
					value={user.password}
					handleChange={handleChange}
					required
				/>

				<CustomButton type='submit'>Sign In</CustomButton>
			</form>
		</div>
	);
};

export default SignIn;
