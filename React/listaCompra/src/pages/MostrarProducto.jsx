import React, { useState } from "react";

const MostrarProducto = (props) => {
	const { productosListado } = props;
	if (productosListado.length === 0) return null; // Nos aseguramos que si está vacío no siga para que no salte error

	return (
		<>
			<div className="panel-izquierda">
				<h2>Lista Productos</h2>
				<div className="lista-items">
					{productosListado.map((p) => (
						<div key={p.id} className="producto-card">
							<div className="producto-imagen">
								<img src={p.imagen_url} alt={p.nombre} />
							</div>
							<div className="producto-info">
								<h3>{p.nombre}</h3>
								<span className="peso">{p.peso} kg</span>
								<span className="precio">{p.precio} €</span>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="panel-derecha">
				<h2>Detalles</h2>
				<p>Selecciona un producto para ver detalles. Próximamente!</p>
			</div>
		</>
	);
};

export default MostrarProducto;
