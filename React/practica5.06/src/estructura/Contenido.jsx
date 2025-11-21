import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import Formulario from "../pages/Formulario.jsx";
import Listado from "../pages/Listado.jsx";

const Contenido = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="formulario" element={<Formulario />} />
				<Route path="listado" element={<Listado />} />
			</Routes>
		</>
	);
};

export default Contenido;
