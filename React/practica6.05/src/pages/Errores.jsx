import React from 'react';

const Errores = (props) => {
	const { errores } = props;
	if (errores.length === 0) return '';
	return (
		<>
			{errores.map((e) => {
				return <p key={crypto.randomUUID()}>{e}</p>;
			})}
		</>
	);
};

export default Errores;
