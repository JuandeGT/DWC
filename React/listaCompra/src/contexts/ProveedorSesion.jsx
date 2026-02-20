import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSupabase from '../hooks/useSupabase.js';
import useNotificacion from '../hooks/useNotificacion.js';
import useSupaCRUD from '../hooks/useSupaCRUD.js';

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
	const { crearCuentaSupa, iniciarSesionSupa, obtenerUsuarioSupa, cerrarSesionSupa, suscripcion } = useSupabase();

	const { obtenerColumnaSupa, obtenerSupa, editarSupa, cargando } = useSupaCRUD('roles');

	const { notificar } = useNotificacion();

	const sesionInicial = {
		email: '',
		password: '',
		name: '',
	};

	const navegar = useNavigate();

	const [datosSesion, setDatosSesion] = useState(sesionInicial);
	const [usuario, setUsuario] = useState(null);
	const [sesionIniciada, setSesionIniciada] = useState(false);
	const [administrador, setAdministrador] = useState(false);
	const [roles, setRoles] = useState([]);

	const crearCuenta = async () => {
		try {
			await crearCuentaSupa(datosSesion);

			notificar('Recibirás un correo para confirmar la cuenta.');
			setDatosSesion(sesionInicial);
		} catch (error) {
			notificar(error.message, 'error');
		}
	};

	const iniciarSesion = async () => {
		try {
			await iniciarSesionSupa(datosSesion);
			notificar('Sesión iniciada correctamente.');
			setDatosSesion(sesionInicial);
			navegar('/listado-productos');
		} catch (error) {
			notificar(error.message, 'error');
		}
	};

	const cerrarSesion = async () => {
		try {
			await cerrarSesionSupa();
			setDatosSesion(sesionInicial);
			// Se redirige al usuario a la parte pública.
			navegar('/');
			notificar('Sesión cerrada correctamente.');
		} catch (error) {
			notificar(error.message, 'error');
		}
	};

	const obtenerUsuario = async () => {
		try {
			const user = await obtenerUsuarioSupa();
			if (user) {
				const datosRol = await obtenerColumnaSupa('id_rol', user.id);

				const usuarioCompleto = {
					...user,
					rol: datosRol[0]?.rol,
				};

				setUsuario(usuarioCompleto);
				// Al obtener el usuario comprobamos si es administrador
				if (usuarioCompleto.rol === 'administrador') {
					setAdministrador(true);
				} else {
					setAdministrador(false);
				}
			} else {
				notificar('No se encuentra el usuario actual', 'error');
			}
		} catch (error) {
			notificar(error.message, 'error');
		}
	};

	const obtenerTodosRoles = async () => {
		if (administrador) {
			try {
				const datos = await obtenerSupa();
				if (datos) {
					setRoles(datos);
				}
			} catch (error) {
				notificar(error.message, 'error');
			}
		}
	};

	const cambiarRol = async (id_rol, rolNuevo) => {
		try {
			const datos = {
				id_rol: id_rol,
				rol: rolNuevo,
			};

			await editarSupa(datos, 'id_rol');

			const rolesNuevos = roles.map((r) => (r.id_rol === id_rol ? { ...r, rol: rolNuevo } : r));
			setRoles(rolesNuevos);

			notificar(`Rol actualizado a ${rolNuevo}.`);
		} catch (error) {
			notificar(error.message, 'error');
		}
	};

	const actualizarDato = (evento) => {
		const { name, value } = evento.target;
		setDatosSesion({ ...datosSesion, [name]: value });
	};

	useEffect(() => {
		const sus = suscripcion((event, session) => {
			if (session) {
				setSesionIniciada(true);
				obtenerUsuario();
			} else {
				setSesionIniciada(false);
			}
		});
	}, []);

	const datosProveer = {
		crearCuenta,
		iniciarSesion,
		cerrarSesion,
		actualizarDato,
		datosSesion,
		sesionIniciada,
		usuario,
		administrador,
		roles,
		obtenerTodosRoles,
		cambiarRol,
		cargando,
	};

	return <contextoSesion.Provider value={datosProveer}>{children}</contextoSesion.Provider>;
};

export default ProveedorSesion;
export { contextoSesion };
