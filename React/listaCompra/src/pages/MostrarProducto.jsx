import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Producto from "./Producto";

const MostrarProducto = (props) => {
	const { productosListado } = props;

	if (!productosListado || productosListado.length === 0) return null; // Nos aseguramos que si está vacío no siga para que no salte error

	return (
		<>
			{productosListado.map((p) => (
				<Producto key={p.id} producto={p} />
			))}
		</>
	);
};

export default MostrarProducto;
