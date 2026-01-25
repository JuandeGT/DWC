import React from 'react';
import { Link } from 'react-router-dom';
import useSesion from '../hooks/useSesion.js';
import './Cabecera.css';

const Cabecera = () => {
	const { sesionIniciada, usuario, cerrarSesion } = useSesion();

	const nombreUsuario = usuario?.user_metadata?.display_name;
	return (
		<>
			<header id="cabecera">
				<h2>Lista de la Compra</h2>

				{sesionIniciada ? (
					<div className="datos-usuario">
						<span className="nombre-usuario">{nombreUsuario}</span>
						<button onClick={cerrarSesion} className="btn-cerrar">
							Cerrar Sesión
						</button>
					</div>
				) : (
					<Link to="/inicio-sesion">Iniciar Sesión</Link>
				)}
			</header>
		</>
	);
};

export default Cabecera;
