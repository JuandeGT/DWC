import React, { createContext, useEffect, useState } from "react";
import useNotificacion from "../hooks/useNotificacion.js";
import useProductosSupa from "../hooks/useProductosSupa.js";

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
	const { obtenerProductosSupa } = useProductosSupa();

	const notificar = useNotificacion();

	const [productos, setProductos] = useState([]);
	const [productosListado, setProductosListado] = useState([]);

	const obtenerProductos = async () => {
		try {
			const datos = await obtenerProductosSupa();
			setProductos(datos);
			setProductosListado(datos);
		} catch (error) {
			notificar(error.message, "error");
		}
	};

	const filtrarNombre = async (nombre) => {
		const filtrado = productosListado.filter((p) =>
			p.nombre.toLowerCase().includes(nombre.toLowerCase()),
		);
		setProductosListado(filtrado);
	};

	useEffect(() => {
		obtenerProductos();
	}, []);

	const datosProveer = {
		productos,
		productosListado,
		filtrarNombre,
	};

	return (
		<contextoProductos.Provider value={datosProveer}>
			{children}
		</contextoProductos.Provider>
	);
};

export default ProveedorProductos;
export { contextoProductos };
