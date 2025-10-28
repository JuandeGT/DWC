import React from "react";
import { useParams } from "react-router-dom";
import datosPeliculas from "../assets/peliculas.json";
import InterpretesPeli from "./InterpretesPeli.jsx";
import BotonInicio from "../estructura/BotonInicio.jsx";

const PeliculaDetalle = () => {
	const { id } = useParams(); // Recogemos el parámetro pasado por la url para identificar la película
	const pelicula = datosPeliculas.peliculas.filter(
		(p) => p.id === parseInt(id) //Usamos parseInt porque params devuelve siempre un string
	);
	return (
		<>
			<div className="peliculas">
				{pelicula.map((peli) => (
					<div key={crypto.randomUUID()}>
						<h2>{peli.nombre}</h2>
						<p>Director: {peli.director}</p>
						<p>Clasificación: {peli.clasificacion}</p>
						<p>Recaudación: {peli.recaudacion}</p>
						<img src={peli.cartelera} alt="Cartelera" />
						<p>Nota: {peli.nota}</p>
						<p>Resumen: {peli.resumen}</p>
						<h3>Actores:</h3>
						<div>{<InterpretesPeli id={peli.id} />}</div>
					</div>
				))}
			</div>
			<BotonInicio />
		</>
	);
};

export default PeliculaDetalle;
