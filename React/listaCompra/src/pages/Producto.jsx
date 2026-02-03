import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSesion from "../hooks/useSesion.js";
import useProductos from "../hooks/useProductos.js";
import { formatearDecimal, formatearPrecio } from "../utils/formatear.js";
import Confirmacion from "../estructura/Confirmacion.jsx";

const Producto = (props) => {
	const { producto } = props;
	const { sesionIniciada } = useSesion();
	const { eliminarProducto } = useProductos();

	const navegar = useNavigate();

	const [confirmar, setConfirmar] = useState(false);

	const editar = (evento) => {
		if (evento.target.className !== "imagen-borrar" && sesionIniciada) {
			navegar(`/editar-producto/${producto.id}`);
		}
	};

	const borrar = () => {
		setConfirmar(true);
	};

	const confirmarBorrado = () => {
		eliminarProducto(producto.id);
		setConfirmar(false);
	};

	const cancelarBorrado = () => {
		setConfirmar(false);
	};

	return (
		<>
			{confirmar && (
				<Confirmacion
					mensaje={`¿Estás seguro de que quieres eliminar "${producto.nombre}"?`}
					onConfirmar={confirmarBorrado}
					onCancelar={cancelarBorrado}
				/>
			)}
			<div
				className="producto-card"
				onClick={(e) => {
					editar(e);
				}}
				style={{ cursor: sesionIniciada ? "pointer" : "default" }}
			>
				{sesionIniciada && (
					<img
						className="imagen-borrar"
						onClick={borrar}
						src="https://cdn-icons-png.freepik.com/512/8568/8568248.png"
						alt="Borrar"
					></img>
				)}
				<div className="producto-imagen">
					<img
						src={producto.imagen_url ? producto.imagen_url : "https://"}
						alt={producto.nombre}
					/>
				</div>
				<div className="producto-info">
					<h3>{producto.nombre}</h3>
					<span className="peso">{formatearDecimal(producto.peso)} kg</span>
					<span className="precio">{formatearPrecio(producto.precio)}</span>
				</div>
			</div>
		</>
	);
};

export default Producto;
