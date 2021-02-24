import React from 'react';
import './styles/formInput.scss';

export interface FormInputProps {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label: string;
	value?: string;
	type: 'text' | 'email' | 'number' | 'password' | 'date';
	name?: string;
	required?: boolean;
}

const FormInput: React.SFC<FormInputProps> = ({
	handleChange,
	label,
	value,
	type,
	name,
	required,
	...restProps
}) => {
	return (
		<div className='group'>
			<input
				type={type}
				name={name}
				value={value}
				className='form-input'
				onChange={handleChange}
				id={name}
				required={required}
			/>
			{label ? (
				<label
					htmlFor={name}
					className={`${value?.length ? 'shrink' : ''} form-input-label `}>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;
