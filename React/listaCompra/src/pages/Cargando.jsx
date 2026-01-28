import React from 'react';
import './Cargando.css';

const Cargando = () => {
	return (
		<div className="cargando-overlay">
			<div className="spinner"></div>
			<div className="cargando-texto">Cargando datos...</div>
		</div>
	);
};

export default Cargando;
