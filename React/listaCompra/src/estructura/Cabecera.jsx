import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSesion from "../hooks/useSesion.js";
import usePerfil from "../hooks/usePerfil.js";
import Confirmacion from "./Confirmacion.jsx";
import "./Cabecera.css";

const Cabecera = () => {
	const { sesionIniciada, usuario, cerrarSesion } = useSesion();
	const { perfil } = usePerfil();
	const navegar = useNavigate();

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
						<img
							src={
								perfil?.avatar ||
								"https://t4.ftcdn.net/jpg/11/68/50/57/360_F_1168505794_IBCEiafsIrHFJ09e65P2vh5115C1XI7e.jpg"
							}
							alt="Avatar usuario"
							className="img-usuario"
							onClick={() => {
								navegar("/perfil");
							}}
						/>
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
