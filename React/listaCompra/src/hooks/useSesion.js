import React, { useContext } from "react";
import ProveederSesion from "../contexts/ProveederSesion.jsx";

const useSesion = () => {
	const contexto = useContext(ProveederSesion);

	if (!contexto) {
		throw new Error(
			"El hook useSesion debe ser utilizado dentro de <ProveedorSesion>.",
		);
	}

	return contexto;
};

export default useSesion;
