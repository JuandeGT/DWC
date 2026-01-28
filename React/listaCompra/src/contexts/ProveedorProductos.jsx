import React, { createContext, useEffect, useState } from 'react';
import useNotificacion from '../hooks/useNotificacion.js';
import useProductosSupa from '../hooks/useProductosSupa.js';

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
	const { obtenerProductosSupa } = useProductosSupa();

	const notificar = useNotificacion();

	const [productos, setProductos] = useState([]);
	const [productosListado, setProductosListado] = useState([]);
	const [cargando, setCargando] = useState(false);

	const obtenerProductos = async () => {
		setCargando(true);
		try {
			const datos = await obtenerProductosSupa();
			if (datos) {
				setProductos(datos);
				setProductosListado(datos);
			}
		} catch (error) {
			notificar(error.message, 'error');
		} finally {
			setCargando(false);
		}
	};

	const filtrar = (filtros, orden) => {
		/* let filtrado = [];
		if (tipo === 'nombre') {
			filtrado = productos.filter((p) => p.nombre.toLowerCase().includes(dato.toLowerCase()));
		} else {
			filtrado = productos.filter((p) => p[tipo] <= dato);
		}
		setProductosListado(filtrado); */
		let resultado = [...productos];

		// 2. Aplicamos filtros (Si hay valor, filtramos)
		if (filtros.nombre) {
			resultado = resultado.filter((p) => p.nombre.toLowerCase().includes(filtros.nombre.toLowerCase()));
		}
		if (filtros.precioMax) {
			resultado = resultado.filter((p) => p.precio <= parseFloat(filtros.precioMax));
		}
		if (filtros.pesoMax) {
			resultado = resultado.filter((p) => p.peso <= parseFloat(filtros.pesoMax));
		}

		// 3. Aplicamos Ordenamiento
		if (orden === 'precioAsc') {
			resultado.sort((a, b) => a.precio - b.precio);
		} else if (orden === 'precioDesc') {
			resultado.sort((a, b) => b.precio - a.precio);
		} else if (orden === 'nombre') {
			resultado.sort((a, b) => a.nombre.localeCompare(b.nombre));
		}

		// 4. Guardamos
		setProductosListado(resultado);
	};

	useEffect(() => {
		obtenerProductos();
	}, []);

	const datosProveer = {
		productos,
		productosListado,
		filtrar,
		cargando,
	};

	return <contextoProductos.Provider value={datosProveer}>{children}</contextoProductos.Provider>;
};

export default ProveedorProductos;
export { contextoProductos };
