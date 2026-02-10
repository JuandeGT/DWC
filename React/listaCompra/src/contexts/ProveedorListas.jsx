import React, { createContext, useEffect, useState } from "react";
import useSupaCRUD from "../hooks/useSupaCRUD.js";
import useNotificacion from "../hooks/useNotificacion.js";
import useSesion from "../hooks/useSesion.js";

const contextoListas = createContext();

const ProveedorListas = ({ children }) => {
	const { cargando, obtenerColumnaSupa, crearSupa, editarSupa, eliminarSupa } =
		useSupaCRUD("lista_compra");

	// Se renombran los métodos para poder usar el hook con distinta tabla por parámetro
	const {
		obtenerMultitabla: obtenerArtSupa,
		crearSupa: crearArtSupa,
		editarSupa: editarArtSupa,
		eliminarSupa: eliminarArtSupa,
	} = useSupaCRUD("lista_articulos");

	const { usuario } = useSesion();
	const { notificar } = useNotificacion();

	const [listas, setListas] = useState([]);
	const [productosLista, setProductosLista] = useState([]);
	const [cargandoInicial, setCargandoInicial] = useState(true);

	const obtenerListas = async () => {
		try {
			const datos = await obtenerColumnaSupa("usuario_id", usuario.id);
			if (datos) setListas(datos);
		} catch (error) {
			notificar(error.message, "error");
		} finally {
			setCargandoInicial(false);
		}
	};

	const crearLista = async (nombreLista) => {
		try {
			await crearSupa({ nombre: nombreLista, usuario_id: usuario.id });
			obtenerListas(); // Hay que traerlos sí o sí para traer el id de la base de datos.
			notificar("Lista creada correctamente.");
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	const editarLista = async (id, nombre) => {
		try {
			const datos = { id: id, nombre: nombre };

			await editarSupa(datos);

			let listasNuevas = listas.map((l) => {
				return l.id === id ? datos : l;
			});
			setListas(listasNuevas);
			notificar("Lista modificada correctamente.");
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	const eliminarLista = async (id) => {
		try {
			await eliminarSupa(id);

			let listasNuevas = listas.filter((l) => {
				if (l.id !== id) return l;
			});
			setListas(listasNuevas);
			notificar("Lista borrada correctamente.");
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	const obtenerProductosLista = async (id) => {
		try {
			const datos = await obtenerArtSupa(
				"lista_id",
				id,
				"producto_id, cantidad, productos(id, nombre, peso, precio, imagen_url, descripcion)",
			);

			if (datos) {
				setProductosLista(datos);
			}
		} catch (error) {
			notificar(error.message, "error");
			setProductosLista([]);
		}
	};

	useEffect(() => {
		if (usuario) {
			obtenerListas();
		}
	}, [usuario]);

	// Se combinan los cargando, uno del hook y el que verifica si llega o no el usuario, así evitamos que se pete el componente
	const datosProveer = {
		listas,
		productosLista,
		cargando: cargando || cargandoInicial,
		crearLista,
		editarLista,
		eliminarLista,
		obtenerProductosLista,
	};

	return (
		<contextoListas.Provider value={datosProveer}>
			{children}
		</contextoListas.Provider>
	);
};

export default ProveedorListas;
export { contextoListas };
