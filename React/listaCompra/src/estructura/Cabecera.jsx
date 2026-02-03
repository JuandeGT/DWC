import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSesion from "../hooks/useSesion.js";
import Confirmacion from "./Confirmacion.jsx";
import "./Cabecera.css";

const Cabecera = () => {
	const { sesionIniciada, usuario, cerrarSesion } = useSesion();

	const nombreUsuario = usuario?.user_metadata?.display_name;

	const [confirmar, setConfirmar] = useState(false);

	const cerrar = () => {
		setConfirmar(true);
	};

	const confirmarCerrado = () => {
		cerrarSesion();
		setConfirmar(false);
	};

	const cancelarCerrado = () => {
		setConfirmar(false);
	};

	return (
		<>
			{confirmar && (
				<Confirmacion
					mensaje={`¿Estás seguro de que quieres cerrar sesion?`}
					onConfirmar={confirmarCerrado}
					onCancelar={cancelarCerrado}
				/>
			)}
			<header id="cabecera">
				<h2>Lista de la Compra</h2>

				{sesionIniciada ? (
					<div className="datos-usuario">
						<span className="nombre-usuario">{nombreUsuario}</span>
						<button onClick={cerrar} className="btn-cerrar">
							Cerrar Sesión
						</button>
					</div>
				) : (
					<Link to="/inicio-sesion" className="btn-login">
						Iniciar Sesión
					</Link>
				)}
			</header>
		</>
	);
};

export default Cabecera;
