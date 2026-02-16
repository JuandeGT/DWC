import React, { useState } from "react";
import useSupaCRUD from "../hooks/useSupaCRUD.js";
import useSesion from "../hooks/useSesion.js";

const ProveedorPerfil = () => {
	const { cargando, obtenerColumnaSupa, crearSupa, editarSupa, eliminarSupa } =
		useSupaCRUD("perfiles");

	const { usuario } = useSesion();

	const [perfil, setPerfil] = useState({});

	const obtenerPerfil = async () => {
		try {
			const datos = await obtenerColumnaSupa("id", usuario.id);
			if (datos) setListas(datos);
		} catch (error) {
			notificar(error.message, "error");
		} finally {
			setCargandoInicial(false);
		}
	};

	return (
		<>
			<div>ProveedorPerfil</div>
		</>
	);
};

export default ProveedorPerfil;
