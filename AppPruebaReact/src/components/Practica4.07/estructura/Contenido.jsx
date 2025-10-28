import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import Peliculas from "../pages/Peliculas.jsx";
import PeliculaDetalle from "../pages/PeliculaDetalle.jsx";
import Interpretes from "../pages/Interpretes.jsx";
import Galeria from "../pages/Galeria.jsx";
import AcercaDe from "../pages/AcercaDe.jsx";

const Contenido = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/peliculas" element={<Peliculas />} />
				<Route path="/peliculaDetalle:id" element={<PeliculaDetalle />} />
				<Route path="/interpretes" element={<Interpretes />} />
				<Route path="/galeria" element={<Galeria />} />
				<Route path="/acerca-de" element={<AcercaDe />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default Contenido;
