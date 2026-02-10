import React, { createContext, useEffect, useState } from "react";
import useNotificacion from "../hooks/useNotificacion.js";
import useSupaCRUD from "../hooks/useSupaCRUD.js";

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
	const { cargando, obtenerSupa, crearSupa, editarSupa, eliminarSupa } =
		useSupaCRUD("productos");

	const { notificar } = useNotificacion();

	const [productos, setProductos] = useState([]);
	const [productosListado, setProductosListado] = useState([]);

	const obtenerProductos = async () => {
		try {
			const datos = await obtenerSupa();
			if (datos) {
				cambiarProductos(datos);
			}
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	const filtrar = (filtro, valor) => {
		if (valor === 0 || valor === "") {
			setProductosListado(productos);
		} else {
			let resultado;
			if (filtro === "nombre") {
				resultado = productos.filter((p) =>
					p.nombre.toLowerCase().includes(valor.toLowerCase()),
				);
			}
			if (filtro === "precio") {
				resultado = productos.filter((p) => p.precio <= Number(valor));
			}
			if (filtro === "peso") {
				resultado = productos.filter((p) => p.peso <= Number(valor));
			}
			setProductosListado(resultado);
		}
	};

	const ordenar = (orden) => {
		let resultado;
		if (orden === "precio") {
			resultado = [...productosListado].sort((a, b) => a.precio - b.precio);
		} else if (orden === "peso") {
			resultado = [...productosListado].sort((a, b) => a.peso - b.peso);
		} else if (orden === "nombre") {
			resultado = [...productosListado].sort((a, b) =>
				a.nombre.localeCompare(b.nombre),
			);
		} else {
			resultado = [...productos];
		}
		setProductosListado(resultado);
	};

	const crearProducto = async (datos) => {
		try {
			await crearSupa(datos);
			notificar("Producto creado correctamente.");
			obtenerProductos(); // Llamamos a la base de datos para traer el nuevo con su id
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	const editarProducto = async (id, datos) => {
		try {
			await editarSupa(datos);

			let productosNuevos = productos.map((p) => {
				return p.id === id ? datos : p;
			});
			cambiarProductos(productosNuevos);
			notificar("Producto modificado correctamente.");
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	const eliminarProducto = async (id) => {
		try {
			await eliminarSupa(id);

			let productosNuevos = productos.filter((p) => {
				if (p.id !== id) {
					return p;
				}
			});
			cambiarProductos(productosNuevos);
			notificar("Producto eliminado correctamente.");
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	// Creo esta función ya que se repite mucho en el código
	const cambiarProductos = (datos) => {
		setProductos(datos);
		setProductosListado(datos);
	};

	useEffect(() => {
		obtenerProductos();
	}, []);

	const datosProveer = {
		productos,
		productosListado,
		cargando,
		filtrar,
		ordenar,
		crearProducto,
		editarProducto,
		eliminarProducto,
	};

	return (
		<contextoProductos.Provider value={datosProveer}>
			{children}
		</contextoProductos.Provider>
	);
};

export default ProveedorProductos;
export { contextoProductos };
