import React, { createContext, useState } from "react";
import useSupaCRUD from "../hooks/useSupaCRUD.js";
import useNotificacion from "../hooks/useNotificacion.js";

const contextoListas = createContext();

const ProveedorListas = ({ children }) => {
	const { cargando, obtenerColumnaSupa, crearSupa, editarSupa, eliminarSupa } =
		useSupaCRUD("lista_compra");

	// Se renombran los métodos para poder usar el hook con distinta tabla por parámetro
	const {
		obtenerSupa: obtenerArtSupa,
		crearSupa: crearArtSupa,
		editarSupa: editarArtSupa,
		eliminarSupa: eliminarArtSupa,
	} = useSupaCRUD("lista_articulos");

	const { notificar } = useNotificacion;

	const [listas, setListas] = useState([]);

	const datosProveer = {};

	return (
		<contextoListas.Provider value={datosProveer}>
			{children}
		</contextoListas.Provider>
	);
};

export default ProveedorListas;
export { contextoListas };
