import React from 'react';
import useProductos from '../hooks/useProductos.js';
import useSesion from '../hooks/useSesion.js';
import MostrarProducto from './MostrarProducto.jsx';
import Cargando from './Cargando.jsx';
import FiltrarProducto from './FiltrarProducto.jsx';
import './Listado.css';

const Listado = () => {
	const { productosListado, cargando, filtrar } = useProductos();
	const { sesionIniciada } = useSesion();
	return (
		<>
			<div className="listado-grid">
				<div className="panel-izquierda">
					<h2>Lista Productos</h2>
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
