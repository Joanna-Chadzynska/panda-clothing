import { CustomButton, FormInput } from 'components';
import { auth, createUserProfileDocument } from 'firebase/firebase.utils';
import React, { useState } from 'react';
import './styles/signUp.scss';

export interface SignUpProps {}

const SignUp: React.SFC<SignUpProps> = () => {
	const [newUser, setNewUser] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { email, password, displayName } = newUser;
		if (newUser.password !== newUser.confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { displayName });
			setNewUser({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewUser({
			...newUser,
			[name]: value,
		});
	};

	return (
		<div className='sign-up'>
			<h2 className='title'>I do not have a account</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					label='Name'
					value={newUser.displayName}
					handleChange={handleChange}
					required
				/>

				<FormInput
					type='email'
					name='email'
					label='Email'
					value={newUser.email}
					handleChange={handleChange}
					required
				/>

				<FormInput
					type='password'
					name='password'
					label='Password'
					value={newUser.password}
					handleChange={handleChange}
					required
				/>

				<FormInput
					type='password'
					name='confirmPassword'
					label='Confirm Password'
					value={newUser.confirmPassword}
					handleChange={handleChange}
					required
				/>

				<CustomButton type='submit'>Sign Up</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
