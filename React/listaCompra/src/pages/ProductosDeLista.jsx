import React, { useState } from 'react';
import useListas from '../hooks/useListas.js';
import Confirmacion from '../estructura/Confirmacion.jsx';
import { formatearPrecio } from '../utils/formatear.js';

const ProductosDeLista = ({ productoLista }) => {
	const { eliminarArticuloLista } = useListas();

	const [confirmar, setConfirmar] = useState(false);

	// Separo los datos de cantidad y el id de la lista
	const producto = productoLista.productos;

	const borrar = () => {
		setConfirmar(true);
	};

	const confirmarBorrado = () => {
		eliminarArticuloLista(productoLista.id);
		setConfirmar(false);
	};

	const cancelarBorrado = () => {
		setConfirmar(false);
	};

	return (
		<>
			{confirmar && (
				<Confirmacion
					mensaje={`¿Quieres quitar "${producto.nombre}" de la lista?`}
					onConfirmar={confirmarBorrado}
					onCancelar={cancelarBorrado}
				/>
			)}
			<div className="producto-mini-card">
				<div className="mini-info">
					<h4 className="mini-titulo">
						{producto.nombre}
						<span className="badge-cantidad">x{productoLista.cantidad}</span>
					</h4>

					<span className="mini-detalle">
						{producto.peso} kg | {formatearPrecio(producto.precio)}
					</span>
				</div>

				<button className="btn-mini-borrar" onClick={borrar} title="Eliminar de la lista">
					<img src="https://img.icons8.com/material-outlined/24/FFFFFF/trash--v1.png" alt="Borrar" />
				</button>
			</div>
		</>
	);
};

export default ProductosDeLista;
