import React from "react";
import { Router, Route } from "react-router-dom";

const Rutas = () => {
	return (
		<>
			<Router>
				<Route path="/" element={<Inicio />} />
				<Route path="/peliculas" element={<Peliculas />} />
				<Route path="/*" element={<Error />} />
			</Router>
		</>
	);
};

export default Rutas;
