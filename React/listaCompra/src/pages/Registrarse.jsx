import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useSesion from '../hooks/useSesion';
import useNotificacion from '../hooks/useNotificacion';
import './Registrarse.css';

const Registrarse = () => {
	const { crearCuenta, actualizarDato, datosSesion } = useSesion();
	const { notificar } = useNotificacion();

	const enviarDatos = () => {
		if (!datosSesion.email || !datosSesion.password || !datosSesion.name) {
			notificar('Todos los campos son obligatorios.', 'error');
			return;
		}
		crearCuenta();
	};

	return (
		<div className="register_container">
			<form>
				<h3>Crear cuenta</h3>

				<label htmlFor="name">Nombre: </label>
				<input
					id="name"
					name="name"
					type="text"
					placeholder="Tu nombre..."
					onChange={actualizarDato}
					value={datosSesion.name}
				/>

				<label htmlFor="email">Correo electrónico:</label>
				<input
					id="email"
					name="email"
					type="email"
					placeholder="nombreapellidos@gmail.com"
					onChange={actualizarDato}
					value={datosSesion.email}
				/>

				<label htmlFor="password">Contraseña: </label>
				<input
					id="password"
					name="password"
					type="password"
					placeholder="Contraseña..."
					onChange={actualizarDato}
					value={datosSesion.password}
				/>

				<input
					type="button"
					id="botonGuardar"
					value="Registrarse"
					onClick={() => {
						enviarDatos();
					}}
				/>
			</form>
			<div style={{ marginTop: '10px' }}>
				<Link to="/inicio-sesion">¿Ya tienes cuenta? Inicia sesión.</Link>
			</div>
		</div>
	);
};

export default Registrarse;
