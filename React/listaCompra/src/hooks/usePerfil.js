import React, { useContext } from "react";
import { contextoPerfil } from "../contexts/ProveedorPerfil.jsx";

const usePerfil = () => {
	const contexto = useContext(contextoPerfil);

	if (!contexto) {
		throw new Error(
			"El hook usePerfil debe ser utilizado dentro de <ProveedorPerfil>.",
		);
	}

	return contexto;
};

export default usePerfil;
