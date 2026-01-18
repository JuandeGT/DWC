import React, { useState } from 'react';

export const useAPI = () => {
	const [cargando, setCargando] = useState(false);
	const [notificacion, setNotificacion] = useState(null);

	const solicitud = async (url, options = {}) => {
		setCargando(true);
		try {
			const respuesta = await fetch(url, {
				headers: {
					'Content-Type': 'application/json',
				},
				...options,
			});
			if (!respuesta.ok) {
				throw new Error(`Error en la solicitud ${respuesta.status}: ${respuesta.statusText}`);
			}
			const datos = await respuesta.json();
			return datos;
		} catch (error) {
			lanzarError(error.message || 'Error al conectar con la API.');
			throw error;
		} finally {
			setCargando(false);
		}
	};

	const obtener = (url) => {
		return solicitud(url, { method: 'GET' });
	};

	const guardar = (url, body) => {
		return solicitud(url, {
			method: 'POST',
			body: JSON.stringify(body),
		});
	};

	const editar = (url, body) => {
		solicitud(url, {
			method: 'PUT',
			body: JSON.stringify(body),
		});
	};

	const borrar = (url) => {
		solicitud(url, {
			method: 'DELETE',
		});
	};

	const limpiarNotificacion = () => {
		setNotificacion(null);
	};

	const lanzarExito = (mensaje) => {
		setNotificacion({ mensaje, tipo: 'exito' });
	};

	const lanzarError = (mensaje) => {
		setNotificacion({ mensaje, tipo: 'error' });
	};

	return {
		cargando,
		notificacion,
		obtener,
		guardar,
		editar,
		borrar,
		limpiarNotificacion,
		lanzarExito,
		lanzarError,
	};
};

export default useAPI;
