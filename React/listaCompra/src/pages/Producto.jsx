import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSesion from '../hooks/useSesion.js';
import useProductos from '../hooks/useProductos.js';

const Producto = (props) => {
	const { producto } = props;
	const { sesionIniciada } = useSesion();
	const { eliminarProducto } = useProductos();

	const navegar = useNavigate();

	const editar = (evento) => {
		if (evento.target.id !== 'imagen-borrar' && sesionIniciada) {
			navegar(`/editar-producto/${producto.id}`);
		}
	};

	const borrar = () => {
		eliminarProducto(producto.id);
	};

	return (
		<>
			<div
				className="producto-card"
				onClick={(e) => {
					editar(e);
				}}
				style={{ cursor: sesionIniciada ? 'pointer' : 'default' }}
			>
				{sesionIniciada && (
					<img
						id="imagen-borrar"
						onClick={borrar}
						src="https://cdn-icons-png.freepik.com/512/8568/8568248.png"
						alt="Borrar"
					></img>
				)}
				<div className="producto-imagen">
					<img src={producto.imagen_url} alt={producto.nombre} />
				</div>
				<div className="producto-info">
					<h3>{producto.nombre}</h3>
					<span className="peso">{Number(producto.peso).toFixed(2)} kg</span>
					<span className="precio">{Number(producto.precio).toFixed(2)} €</span>
				</div>
			</div>
		</>
	);
};

export default Producto;
