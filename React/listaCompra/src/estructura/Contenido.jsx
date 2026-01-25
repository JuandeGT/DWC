import React from 'react';
import './Contenido.css';

const Contenido = ({ children }) => {
	return (
		<>
			<div className="contenido-principal">{children}</div>
		</>
	);
};

export default Contenido;
