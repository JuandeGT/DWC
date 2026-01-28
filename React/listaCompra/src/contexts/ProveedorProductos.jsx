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

	const filtrar = (filtro, valor) => {
		if (valor === 0 || valor === '') {
			setProductosListado(productos);
		} else {
			let resultado;
			if (filtro === 'nombre') {
				resultado = productos.filter((p) => p.nombre.toLowerCase().includes(valor.toLowerCase()));
			}
			if (filtro === 'precio') {
				resultado = productos.filter((p) => p.precio <= Number(valor));
			}
			if (filtro === 'peso') {
				resultado = productos.filter((p) => p.peso <= Number(valor));
			}
			setProductosListado(resultado);
		}
	};

	const ordenar = (orden) => {
		let resultado;
		if (orden === 'precio') {
			resultado = [...productosListado].sort((a, b) => a.precio - b.precio);
		} else if (orden === 'peso') {
			resultado = [...productosListado].sort((a, b) => a.peso - b.peso);
		} else if (orden === 'nombre') {
			resultado = [...productosListado].sort((a, b) => a.nombre.localeCompare(b.nombre));
		} else {
			resultado = [...productos];
		}
		setProductosListado(resultado);
	};

	useEffect(() => {
		obtenerProductos();
	}, []);

	const datosProveer = {
		productos,
		productosListado,
		filtrar,
		ordenar,
		cargando,
	};

	return <contextoProductos.Provider value={datosProveer}>{children}</contextoProductos.Provider>;
};

export default ProveedorProductos;
export { contextoProductos };
