import React from 'react';

const Title = (props: any) => {
	const { title } = props;

	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
};

export default Title;
