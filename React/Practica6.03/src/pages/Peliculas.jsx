import React from 'react';
import { useEffect, useState } from 'react';
import { traerPeliculas } from '../functions/starwars.js';
import PeliculaDetalle from './PeliculaDetalle.jsx';
import './Peliculas.css';

const Peliculas = () => {
	const [peliculas, setPeliculas] = useState([]);
	const [seleccionada, setSeleccionada] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const traerDatos = async () => {
			try {
				const datos = await traerPeliculas('https://swapi.dev/api/films/');
				setPeliculas(datos);
			} catch (error) {
				setError(error.message);
			}
		};
		traerDatos();
	}, []);

	const seleccionarPelicula = (id) => {
		const peli = peliculas.find((p) => p.episode_id === id);
		setSeleccionada(peli);
	};

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
					<PeliculaDetalle pelicula={seleccionada} />
				</div>
			</div>
		</>
	);
};

export default Peliculas;
