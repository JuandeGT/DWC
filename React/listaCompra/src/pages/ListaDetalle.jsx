import React, { useEffect } from 'react';
import ProductosDeLista from './ProductosDeLista';
import useListas from '../hooks/useListas.js';
import Cargando from './Cargando';
import { formatearPrecio, formatearFecha } from '../utils/formatear.js';

const ListaDetalle = ({ id, listaInfo }) => {
	const { cargando, productosLista, obtenerProductosLista } = useListas();

	useEffect(() => {
		if (id) {
			obtenerProductosLista(id);
		}
	}, [id]);

	const calculos = () => {
		let precioTotal = 0;
		let pesoTotal = 0;

		if (productosLista && productosLista.length > 0) {
			productosLista.forEach((p) => {
				if (p.productos) {
					precioTotal += p.productos.precio * p.cantidad;
					pesoTotal += p.productos.peso * p.cantidad;
				}
			});
		}
		return { precioTotal, pesoTotal };
	};

	const { precioTotal, pesoTotal } = calculos();

	const PESO_COCHE = 12;
	const necesitaCoche = pesoTotal >= PESO_COCHE;

	const fechaCreacion = listaInfo ? formatearFecha(listaInfo.fecha_creacion) : '...';

	// En el map pongo el || p.producto_id porque si lo acaba de añadir puede que no tenga el id
	return (
		<>
			<div className="resumen-lista-panel">
				<div className="fila-resumen">
					<span>📅 Creada: </span>
					<strong>{fechaCreacion}</strong>
				</div>

				<div className="fila-resumen">
					<span>⚖️ Peso Total: </span>
					<strong>{pesoTotal.toFixed(2)} kg</strong>
				</div>

				{necesitaCoche && (
					<div className="alerta-coche">
						🚗 <strong>¡Coge el coche!</strong> Pesa bastante.
					</div>
				)}

				<div className="fila-resumen total-precio">
					<span>💰 Total Previsto: </span>
					<strong>{formatearPrecio(precioTotal)}</strong>
				</div>
			</div>
			{cargando && <Cargando />}
			<div className="lista-detalle-container">
				{!productosLista || productosLista.length === 0 ? (
					<p>Lista vacía, añade productos.</p>
				) : (
					productosLista.map((p) => <ProductosDeLista key={p.id || p.producto_id} productoLista={p} />)
				)}
			</div>
		</>
	);
};

export default ListaDetalle;
