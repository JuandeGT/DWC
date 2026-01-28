import React from 'react';
import { Link } from 'react-router-dom';
import useSesion from '../hooks/useSesion.js';
import useNotificacion from '../hooks/useNotificacion.js';
import './InicioSesion.css';

const InicioSesion = () => {
	const { iniciarSesion, actualizarDato, datosSesion } = useSesion();
	const { notificar } = useNotificacion();

	const enviarDatos = (e) => {
		e.preventDefault();
		// Validamos que no estén vacíos
		if (!datosSesion.email.trim() || !datosSesion.password.trim()) {
			notificar('Por favor, rellena todos los campos.', 'error');
			return;
		}
		iniciarSesion();
	};
	return (
		<>
			<div id="div-form">
				<form id="formulario" name="formulario" onSubmit={enviarDatos}>
					<h3>Formulario:</h3>
					<label htmlFor="email">Correo electrónico: </label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="nombreapellidos@gmail.com"
						onChange={actualizarDato}
						value={datosSesion.email}
					/>
					<br />
					<label htmlFor="password">Contraseña: </label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Contraseña..."
						onChange={actualizarDato}
						value={datosSesion.password}
					/>
					<input type="submit" id="botonGuardar" value="Iniciar Sesión" />
				</form>
				<div style={{ marginTop: '10px' }}>
					<Link to="/registrarse">¿No tienes cuenta? Regístrate aquí.</Link>
				</div>
			</div>
		</>
	);
};

export default InicioSesion;
