import React from 'react';
import Peliculas from '../peliculas.json';
import Interpretes from './Interpretes.jsx';

const Peliculas = () => {
	return (
		<div className="peliculas">
			{Peliculas.peliculas.map((peli) => {
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
				</div>;
			})}
		</div>
	);
};

export default Peliculas;
