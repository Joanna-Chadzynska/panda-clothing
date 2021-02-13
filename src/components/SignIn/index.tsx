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
				<input
					type='email'
					name='email'
					id='email'
					value={user.email}
					onChange={handleChange}
					required
				/>
				<label htmlFor='email'>Email</label>
				<input
					type='password'
					name='password'
					id='password'
					value={user.password}
					onChange={handleChange}
					required
				/>
				<label htmlFor='password'>Password</label>

				<input type='submit' value='Sign In' />
			</form>
		</div>
	);
};

export default SignIn;
