import React from "react";
import { useNavigate } from "react-router-dom";

const BotonInicio = () => {
	const navigate = useNavigate();

	const botonInicio = () => {
		navigate("/peliculas");
	};

	return (
		<>
			<button
				onClick={() => {
					botonInicio();
				}}
			>
				Peliculas
			</button>
		</>
	);
};

export default BotonInicio;
