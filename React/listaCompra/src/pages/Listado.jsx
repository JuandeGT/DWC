import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProductos from '../hooks/useProductos.js';
import useSesion from '../hooks/useSesion.js';
import MostrarProducto from './MostrarProducto.jsx';
import Cargando from './Cargando.jsx';
import FiltrarProducto from './FiltrarProducto.jsx';
import { formatearPrecio } from '../utils/formatear.js';
import './Listado.css';

const Listado = () => {
	const { productosListado, cargando } = useProductos();
	const { sesionIniciada } = useSesion();

	const navegar = useNavigate();

	const calcularPrecio = () => {
		let precioMedio = 0;
		productosListado.forEach((producto) => (precioMedio += Number(producto.precio)));
		return precioMedio / productosListado.length || 0;
	};
	return (
		<>
			<div className="listado-grid">
				<div className="panel-izquierda">
					<div className="cabecera-lista">
						<h2>Lista Productos</h2>
						{sesionIniciada && (
							<button className="btn-crear-nuevo" onClick={() => navegar('/crear-producto')}>
								<img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" alt="Crear" />
							</button>
						)}
					</div>
					{cargando ? (
						<Cargando />
					) : (
						<>
							{sesionIniciada && <FiltrarProducto />}
							<div className="lista-items">
								{!productosListado || productosListado.length === 0 ? (
									<p>No hay productos disponibles.</p>
								) : (
									<MostrarProducto productosListado={productosListado} />
								)}
							</div>
							<div className="resumen-box">
								<div className="dato-resumen">
									<span>Cantidad:</span>
									<strong>{productosListado.length} prods.</strong>
								</div>
								<div className="dato-resumen">
									<span>Precio Medio:</span>
									<strong>{formatearPrecio(calcularPrecio())}</strong>
								</div>
							</div>
						</>
					)}
				</div>
				<div className="panel-derecha">
					<h2>Detalles</h2>
					<p>Selecciona un producto para ver detalles. Próximamente!</p>
				</div>
			</div>
		</>
	);
};

export default Listado;
