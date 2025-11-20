import React from "react";
import datosPeliculas from "../assets/peliculas.json";

const InterpretesPeli = ({ id }) => {
	const pelicula = datosPeliculas.peliculas.find(
		(peli) => peli.id === parseInt(id)
	);
	if (!pelicula) {
		// Es necesario ponerlo para que no de error aunque sepamos con certeza que no va a fallar
		return <p>No se encontró la película con ID {id}.</p>;
	}
	return (
		<div className="actores">
			{pelicula.actores.map((actor) => (
				<div key={crypto.randomUUID()}>
					<h3>{actor.nombre}</h3>
					<p>{actor.fechaNacimiento}</p>
					<p>{actor.biografia}</p>
					<img src={actor.imagen} alt="Imagen" />
				</div>
			))}
		</div>
	);
};

export default InterpretesPeli;
