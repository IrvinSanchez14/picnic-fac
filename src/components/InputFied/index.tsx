import React from 'react';

interface IInputFieldProps {
	type: string;
	name: string;
	value: any;
	onChange: (event: any) => void;
}

const InputField = (props: IInputFieldProps) => {
	const { type, value, name, onChange } = props;

	return <input type={type} name={name} value={value} onChange={onChange} />;
};

export default InputField;
