import React from 'react';
import './Listado.css';

const Listado = () => {
	return (
		<>
			<div className="listado-grid">
				<div className="panel-izquierda">
					<h2>Mis Productos</h2>
					<div className="lista-items">
						<div className="item-ejemplo">Producto 1</div>
						<div className="item-ejemplo">Producto 2</div>
						<div className="item-ejemplo">Producto 3</div>
					</div>
				</div>

				<div className="panel-derecha">
					<h2>Detalles</h2>
					<p>Selecciona un producto para ver detalles.</p>
				</div>
			</div>
		</>
	);
};

export default Listado;
