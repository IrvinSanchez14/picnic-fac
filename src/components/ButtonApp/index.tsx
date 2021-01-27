import React from 'react';

interface IButtonAppProps {
	onSubmit?: (event: any) => void | undefined;
	text: string;
}

const ButtonApp = (props: IButtonAppProps) => {
	const { onSubmit, text } = props;

	return <button onClick={onSubmit}>{text}</button>;
};

export default ButtonApp;
