import React from 'react';
import Peliculas from '../peliculas.json';

const Interpretes = ({ id }) => {
	const pelicula = Peliculas.peliculas.filter((peli) => {
		p.id == id;
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
