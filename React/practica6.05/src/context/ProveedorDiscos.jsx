import React, { useState, useEffect, createContext } from 'react';
import useAPI from '../hooks/useAPI.js';

const ContextoDiscos = createContext();

const ProveedorDiscos = ({ children }) => {
	const [discos, setDiscos] = useState([]);

	const API_URL = 'http://localhost:3000/discos';

	const { obtener, guardar, borrar, editar, cargando, notificacion, limpiarNotificacion, lanzarError, lanzarExito } =
		useAPI();

	const obtenerDiscos = async () => {
		try {
			const datos = await obtener(API_URL);
			setDiscos(datos);
		} catch (error) {
			throw error;
		}
	};

	const guardarDisco = async (datos) => {
		try {
			const respuesta = await guardar(API_URL, datos);
			obtenerDiscos();
		} catch (error) {
			throw error;
		}
	};

	const borrarDisco = async (id) => {
		try {
			const respuesta = await borrar(`${API_URL}/${id}`);
			obtenerDiscos();
		} catch (error) {
			throw error;
		}
	};

	const editarDisco = async (id, datos) => {
		try {
			const respuesta = await editar(`${API_URL}/${id}`, datos);
			obtenerDiscos();
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		obtenerDiscos();
	}, []);

	const datosAProveer = {
		discos,
		obtenerDiscos,
		guardarDisco,
		borrarDisco,
		editarDisco,
		cargando,
		notificacion,
		limpiarNotificacion,
		lanzarExito,
		lanzarError,
	};

	return (
		<>
			<ContextoDiscos.Provider value={datosAProveer}>{children}</ContextoDiscos.Provider>
		</>
	);
};

export default ProveedorDiscos;
export { ContextoDiscos };
