import React from 'react';

const Errores = (props) => {
	const { error } = props;
	if (error.length === 0) return '';
	return (
		<>
			<p key={crypto.randomUUID()}>{error}</p>;
		</>
	);
};

export default Errores;
