import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSesion from "../hooks/useSesion";
import useNotificacion from "../hooks/useNotificacion";
import "./Registrarse.css";

const Registrarse = () => {
	const { crearCuenta, actualizarDato, datosSesion } = useSesion();
	const { notificar } = useNotificacion();

	const [confirmPasswd, setConfirmPasswd] = useState("");

	const enviarDatos = (e) => {
		e.preventDefault();

		if (
			!datosSesion.name ||
			!datosSesion.email ||
			!datosSesion.password ||
			!confirmPasswd
		) {
			notificar("Todos los campos son obligatorios.", "error");
			return;
		}

		if (datosSesion.password !== confirmPasswd) {
			notificar("Las contraseñas no coinciden.", "error");
			return;
		}

		crearCuenta();
	};

	return (
		<div className="register-container">
			<form onSubmit={enviarDatos}>
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

				<label htmlFor="confirm">Repetir contraseña: </label>
				<input
					id="confirm"
					name="confirm"
					type="password"
					placeholder="Confirmar contraseña..."
					onChange={(e) => setConfirmPasswd(e.target.value)}
					value={confirmPasswd}
				/>

				<input type="submit" className="register-btn" value="Registrarse" />
			</form>
			<div className="register-footer">
				<Link to="/inicio-sesion">¿Ya tienes cuenta? Inicia sesión.</Link>
			</div>
		</div>
	);
};

export default Registrarse;
