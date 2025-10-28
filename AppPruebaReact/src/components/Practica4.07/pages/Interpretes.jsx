import React from 'react';
import datosPeliculas from '../assets/peliculas.json';

const Interpretes = () => {
	return (
		<>
			{datosPeliculas.peliculas.map((peli) => (
				<div key={crypto.randomUUID()} className="actores">
					{peli.actores.map((actor) => (
						<div key={crypto.randomUUID()}>
							<h3>{actor.nombre}</h3>
							<p>{actor.fechaNacimiento}</p>
							<p>{actor.biografia}</p>
							<img src={actor.imagen} alt="Imagen" />
						</div>
					))}
				</div>
			))}
		</>
	);
};

export default Interpretes;
