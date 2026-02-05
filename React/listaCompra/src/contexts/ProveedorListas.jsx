import React, { createContext } from "react";
import useSupaCRUD from "../hooks/useSupaCRUD.js";
import useNotificacion from "../hooks/useNotificacion.js";

const contextoListas = createContext();

const ProveedorListas = ({ children }) => {
	const { cargando, obtenerSupa, crearSupa, editarSupa, eliminarSupa } =
		useSupaCRUD("lista_compra");

	// Se renombran los métodos para poder usar el hook con distinta tabla por parámetro
	/* const {
		cargando: a,
		obtenerSupa: v,
		crearSupa: g,
		editarSupa: h,
		eliminarSupa: t,
	} = useSupaCRUD("lista_articulos"); */

	const { notificar } = useNotificacion;

	const datosProveer = {};

	return (
		<contextoListas.Provider value={datosProveer}>
			{children}
		</contextoListas.Provider>
	);
};

export default ProveedorListas;
export { contextoListas };
