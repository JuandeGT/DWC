import React, { useState } from 'react';

const MostrarProducto = (props) => {
	const { productosListado } = props;
	if (!productosListado || productosListado.length === 0) return null; // Nos aseguramos que si está vacío no siga para que no salte error

	return (
		<>
			{productosListado.map((p) => (
				<div key={p.id} className="producto-card">
					<div className="producto-imagen">
						<img src={p.imagen_url} alt={p.nombre} />
					</div>
					<div className="producto-info">
						<h3>{p.nombre}</h3>
						<span className="peso">{Number(p.peso).toFixed(2)} kg</span>
						<span className="precio">{Number(p.precio).toFixed(2)} €</span>
					</div>
				</div>
			))}
		</>
	);
};

export default MostrarProducto;
