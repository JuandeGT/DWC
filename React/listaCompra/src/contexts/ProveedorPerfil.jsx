import React, { createContext, useEffect, useState } from "react";
import useSupaCRUD from "../hooks/useSupaCRUD.js";
import useSesion from "../hooks/useSesion.js";
import useNotificacion from "../hooks/useNotificacion.js";

const contextoPerfil = createContext();

const ProveedorPerfil = ({ children }) => {
	const { cargando, obtenerColumnaSupa, crearSupa, editarSupa, eliminarSupa } =
		useSupaCRUD("perfiles");

	const { usuario } = useSesion();
	const { notificar } = useNotificacion();

	const [perfil, setPerfil] = useState(null);

	const obtenerPerfil = async () => {
		try {
			const datos = await obtenerColumnaSupa("id", usuario.id);
			if (datos && datos.length > 0) {
				setPerfil(datos[0]);
			} else {
				notificar("Este usuario no tiene perfil.", "error");
			}
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	const editarPerfil = async (datos) => {
		try {
			const datosNuevos = { ...datos, id: usuario.id };

			await editarSupa(datosNuevos);

			obtenerPerfil();
			notificar("Perfil modificado correctamente.");
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	useEffect(() => {
		if (usuario && usuario.id) {
			obtenerPerfil();
		}
	}, [usuario]);

	const datosProveer = {
		perfil,
		editarPerfil,
	};

	return (
		<contextoPerfil.Provider value={datosProveer}>
			{children}
		</contextoPerfil.Provider>
	);
};

export default ProveedorPerfil;
export { contextoPerfil };
