import React from 'react';

interface IFormAppProps {
	children: any;
}

const FormApp = (props: IFormAppProps) => {
	const { children } = props;

	return (
		<div>
			<form>{children}</form>
		</div>
	);
};

export default FormApp;
