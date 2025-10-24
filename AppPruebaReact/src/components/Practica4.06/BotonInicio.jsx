import React from 'react';
import { useNavigate } from 'react-router-dom';

const BotonInicio = () => {
	const navigate = useNavigate();

	const botonInicio = () => {
		navigate('/');
	};

	return (
		<>
			<button
				onClick={() => {
					botonInicio();
				}}
			>
				Inicio
			</button>
		</>
	);
};

export default BotonInicio;
