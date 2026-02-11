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
		editarSupa2Columnas,
		crearSupa: crearArtSupa,
		editarSupa: editarArtSupa,
		eliminarSupa: eliminarArtSupa,
	} = useSupaCRUD("lista_articulos");

	const { usuario } = useSesion();
	const { notificar } = useNotificacion();

	const [listas, setListas] = useState([]);
	const [listaActual, setListaActual] = useState([]);
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

	const seleccionarListaId = async (id) => {
		try {
			const datos = await obtenerColumnaSupa("id", id);
			if (datos) {
				setListaActual(datos);
			}
		} catch (error) {
			notificar(error.message, "error");
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

	const agregarArticuloLista = async (id_producto, cantidad) => {
		try {
			await obtenerProductosLista(listaActual.id);
			if (productosLista) {
				const producto = productosLista.find((p) => p.id === id_producto);

				if (producto) {
					const productoAumentado = {
						lista_id: listaActual.id,
						producto_id: id_producto,
						cantidad: producto.cantidad + cantidad,
					};

					await editarSupa2Columnas(
						"lista_id",
						"producto_id",
						productoAumentado,
					);

					const productosNuevos = productosLista.map((p) => {
						if (p.producto_id === id_producto) {
							return { ...p, cantidad: productoAumentado.cantidad };
						}
						return p;
					});
					setProductosLista(productosNuevos);
					notificar("Cantidad aumentada correctamente.");
				} else {
					const productoNuevo = {
						lista_id: listaActual.id,
						producto_id: id_producto,
						cantidad: cantidad,
					};

					await crearArtSupa(productoNuevo);
					await obtenerProductosLista(listaActual.id);
					notificar("Producto añadido a la lista.");
				}
			}
		} catch (error) {}
	};

	useEffect(() => {
		if (usuario) {
			obtenerListas();
		}
	}, [usuario]);

	// Se combinan los cargando, uno del hook y el que verifica si llega o no el usuario, así evitamos que se pete el componente
	const datosProveer = {
		listas,
		listaActual,
		productosLista,
		cargando: cargando || cargandoInicial,
		seleccionarListaId,
		crearLista,
		editarLista,
		eliminarLista,
		agregarArticuloLista,
	};

	return (
		<contextoListas.Provider value={datosProveer}>
			{children}
		</contextoListas.Provider>
	);
};

export default ProveedorListas;
export { contextoListas };
