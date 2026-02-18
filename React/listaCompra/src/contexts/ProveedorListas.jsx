import React, { createContext, useEffect, useState } from "react";
import useSupaCRUD from "../hooks/useSupaCRUD.js";
import useNotificacion from "../hooks/useNotificacion.js";
import useSesion from "../hooks/useSesion.js";

const contextoListas = createContext();

const ProveedorListas = ({ children }) => {
	const {
		cargando,
		obtenerSupa,
		obtenerColumnaSupa,
		crearSupa,
		editarSupa,
		eliminarSupa,
	} = useSupaCRUD("lista_compra");

	// Se renombran los métodos para poder usar el hook con distinta tabla por parámetro
	const {
		obtenerMultitabla: obtenerArtSupa,
		editarSupa2Columnas,
		crearSupa: crearArtSupa,
		eliminarSupa: eliminarArtSupa,
	} = useSupaCRUD("lista_articulos");

	const { usuario, administrador } = useSesion();
	const { notificar } = useNotificacion();

	const [listas, setListas] = useState([]);
	const [todasListas, setTodasListas] = useState([]);
	const [productosLista, setProductosLista] = useState([]);
	const [cargandoInicial, setCargandoInicial] = useState(true);

	const obtenerTodasListas = async () => {
		if (administrador) {
			try {
				const datos = await obtenerSupa();
				if (datos) setTodasListas(datos);
			} catch (error) {
				notificar(error.message, "error");
			}
		}
	};

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

			const listasNuevas = listas.map((l) => {
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

			const listasNuevas = listas.filter((l) => l.id !== id);
			setListas(listasNuevas);
			notificar("Lista borrada correctamente.");
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	const eliminarArticuloLista = async (id) => {
		try {
			await eliminarArtSupa(id);

			const productosNuevos = productosLista.filter((p) => p.id !== id);

			setProductosLista(productosNuevos);
			notificar("Producto eliminado de la lista.");
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	const obtenerProductosLista = async (id) => {
		try {
			const datos = await obtenerArtSupa(
				"lista_id",
				id,
				"id, producto_id, cantidad, productos(id, nombre, peso, precio, imagen_url, descripcion)",
			);

			if (datos) {
				setProductosLista(datos);
				return datos;
			}
		} catch (error) {
			notificar(error.message, "error");
			setProductosLista([]);
		}
	};

	const agregarArticuloLista = async (id_lista, id_producto, cantidad) => {
		try {
			const productos = await obtenerProductosLista(id_lista);
			if (productos) {
				const producto = productos.find((p) => p.producto_id === id_producto);

				if (producto) {
					// Actualizar cantidad del producto porque ya existe
					const productoAumentado = {
						lista_id: id_lista,
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
					// Metemos el producto en la lista
					const productoNuevo = {
						lista_id: id_lista,
						producto_id: id_producto,
						cantidad: cantidad,
					};

					await crearArtSupa(productoNuevo);
					await obtenerProductosLista(id_lista);
					notificar("Producto añadido a la lista.");
				}
			}
		} catch (error) {}
	};

	useEffect(() => {
		if (usuario) {
			obtenerListas();
			obtenerTodasListas();
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
		agregarArticuloLista,
		obtenerProductosLista,
		eliminarArticuloLista,
		todasListas,
	};

	return (
		<contextoListas.Provider value={datosProveer}>
			{children}
		</contextoListas.Provider>
	);
};

export default ProveedorListas;
export { contextoListas };
