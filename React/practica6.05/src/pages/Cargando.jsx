import React from 'react';
import useDiscos from '../hooks/useDiscos';
import './Cargando.css';

const Cargando = () => {
	const { cargando } = useDiscos();

	if (!cargando) return null;

	return (
		<div className="cargando-overlay">
			<div className="spinner"></div>
			<div className="cargando-texto">Procesando...</div>
		</div>
	);
};

export default Cargando;
