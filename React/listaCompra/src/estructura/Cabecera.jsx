import React from "react";
import { Link } from "react-router-dom";
import "./Cabecera.css";

const Cabecera = () => {
	return (
		<>
			<header id="cabecera">
				<h2>Título</h2>
				<Link to="/inicio-sesion">Iniciar Sesión</Link>
			</header>
		</>
	);
};

export default Cabecera;
