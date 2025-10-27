import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import Peliculas from "../pages/Peliculas.jsx";
import Interpretes from "../pages/Interpretes.jsx";
import Galeria from "../pages/Galeria.jsx";
import AcercaDe from "../pages/AcercaDe.jsx";

const Contenido = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/peliculas" element={<Peliculas />} />
					<Route path="/interpretes" element={<Interpretes />} />
					<Route path="/galeria" element={<Galeria />} />
					<Route path="/acerca-de" element={<AcercaDe />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Contenido;
