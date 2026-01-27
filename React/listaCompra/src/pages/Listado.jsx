import React from "react";
import useProductos from "../hooks/useProductos.js";
import MostrarProducto from "./MostrarProducto.jsx";
import "./Listado.css";

const Listado = () => {
	const { productosListado } = useProductos();

	if (!productosListado) return null;
	return (
		<>
			<div className="listado-grid">
				<MostrarProducto productosListado={productosListado} />
			</div>
		</>
	);
};

export default Listado;
