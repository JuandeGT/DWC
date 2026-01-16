import React, { useContext } from "react";
import { ContextoDiscos } from "../context/ProveedorDiscos.jsx";

const useDiscos = () => {
	/**
	 * Hook personalizado para consumir el contexto de Discentes de forma segura.
	 * Lanza un error si se intenta usar fuera de su proveedor.
	 */
	const contexto = useContext(ContextoDiscos);

	if (!contexto) {
		throw new Error(
			"El hook useDiscos debe ser utilizado dentro de <ProveedorDiscos>."
		);
	}

	return contexto;
};

export default useDiscos;
