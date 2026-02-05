import React, { useContext } from "react";
import { contextoListas } from "../contexts/ProveedorListas.jsx";

const useListas = () => {
	const contexto = useContext(contextoListas);

	if (!contexto) {
		throw new Error(
			"El hook useListas debe ser utilizado dentro de <ProveedorListas>.",
		);
	}

	return contexto;
};

export default useListas;
