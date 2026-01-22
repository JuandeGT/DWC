import React from "react";
import { Link } from "react-router-dom";
import "./InicioSesion.css";

const InicioSesion = () => {
	return (
		<>
			<div id="div-form">
				<form id="formulario" name="formulario">
					<h3>Formulario:</h3>
					<label htmlFor="correo">Correo :</label>
					<input
						type="email"
						id="correo"
						name="correo"
						placeholder="Correo..."
						required
					/>
					<br />
					<input
						type="button"
						id="botonGuardar"
						value="Guardar"
						onClick={() => {
							guardarForm();
						}}
					/>
				</form>
			</div>
			<Link to="registrarse">No tienes cuenta: Registrarse</Link>
		</>
	);
};

export default InicioSesion;
