import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error.css";

const Error = () => {
	const navigate = useNavigate();

	return (
		<div className="error-container">
			<div className="error-card">
				<h1 className="error-code">404</h1>

				<h2 className="error-title">¡Ups! Página no encontrada.</h2>

				<p className="error-description">
					Parece que te has desviado del camino. La ruta que buscas no existe o
					ha sido movida.
				</p>

				<button className="btn-error-home" onClick={() => navigate("/")}>
					Volver al inicio
				</button>
			</div>
		</div>
	);
};

export default Error;
