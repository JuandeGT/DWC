import React, { useContext } from "react";
import { contextoProductos } from "../contexts/ProveedorProductos.jsx";

const useProductos = () => {
	const contexto = useContext(contextoProductos);

	if (!contexto) {
		throw new Error(
			"El hook useProductos debe ser utilizado dentro de <ProveedorProductos>.",
		);
	}

	return contexto;
};

export default useProductos;
