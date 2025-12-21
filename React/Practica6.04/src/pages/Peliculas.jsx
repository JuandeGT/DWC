import React, { useContext } from 'react';
import { ContextoPeliculas } from '../context/ContextoPeliculas.jsx';
import PeliculaDetalle from './PeliculaDetalle.jsx';
import './Peliculas.css';

const Peliculas = () => {
	const { peliculas, seleccionada, seleccionarPelicula, error } = useContext(ContextoPeliculas);

	if (error) return <p className="error">Se ha producido un error: {error}</p>;

	return (
		<>
			<div className="sidebar">
				<ul className="lista-peliculas">
					{peliculas.map((p) => (
						<li key={p.episode_id} className="item" onClick={() => seleccionarPelicula(p.episode_id)}>
							<h4>{p.title}</h4>
							<p>Id: {p.episode_id}</p>
						</li>
					))}
				</ul>

				<div className="detalle">
					<PeliculaDetalle />
				</div>
			</div>
		</>
	);
};

export default Peliculas;
