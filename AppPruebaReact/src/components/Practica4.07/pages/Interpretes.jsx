import React from "react";
import DatosPeliculas from "../peliculas.json";

const Interpretes = ({ id }) => {
	const pelicula = DatosPeliculas.peliculas.filter((peli) => {
		peli.id == id;
	});
	return (
		<div className="actores">
			{pelicula.actores.map((actor) => {
				<div>
					<h3>{actor.nombre}</h3>
					<p>{actor.fechaNacimiento}</p>
					<p>{actor.biografia}</p>
					<img src={actor.imagen} alt="Imagen" />
				</div>;
			})}
		</div>
	);
};

export default Interpretes;
