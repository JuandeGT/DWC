import React from "react";
import { useParams } from "react-router-dom";
import DatosPeliculas from "../peliculas.json";
import Interpretes from "./Interpretes.jsx";

const PeliculaDetalle = () => {
	const { id } = useParams();
	const peli = DatosPeliculas.peliculas.filter((peli) => {
		peli.id === parseInt(id);
	});

	return (
		<div className="peliculas">
			<div>
				<h2>{peli.nombre}</h2>
				<p>Director: {peli.director}</p>
				<p>Clasificación: {peli.clasificacion}</p>
				<p>Recaudación: {peli.recaudacion}</p>
				<img src={peli.cartelera} alt="Cartelera" />
				<p>Nota: {peli.nota}</p>
				<p>Resumen: {peli.resumen}</p>
				<h3>Actores:</h3>
				<div>{<Interpretes id={peli.id} />}</div>
			</div>
			;
		</div>
	);
};

export default PeliculaDetalle;
