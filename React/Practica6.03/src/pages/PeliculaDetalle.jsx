import React from 'react';
import { useState, useEffect } from 'react';
import { traerPersonajes } from '../functions/starwars.js';
import './PeliculasDetalle.css';

const PeliculaDetalle = ({ pelicula }) => {
	const [personajes, setPersonajes] = useState([]);
	const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const cargarPersonajes = async () => {
			try {
				const datos = await traerPersonajes(pelicula.characters);
				setPersonajes(datos);
				setPersonajeSeleccionado(null);
				setError(null);
			} catch (error) {
				setError(error.message);
			}
		};
		cargarPersonajes();
	}, [pelicula]);

	if (!pelicula) return null;

	const formatearFecha = (fecha) => {
		const partes = fecha.split('-');
		return `${partes[2]}/${partes[1]}/${partes[0]}`;
	};

	return (
		<div className="detalle-contenido">
			<header className="detalle-header">
				<h2 className="titulo">{pelicula.title}</h2>
				<div className="info">
					<span>Fecha de lanzamiento: {formatearFecha(pelicula.release_date)}</span>
					<p>Director: {pelicula.director}</p>
					<p>Productor: {pelicula.producer}</p>
				</div>
			</header>
			<p className="sinopsis">Sinopsis: {pelicula.opening_crawl}</p>

			<div className="personajes">
				<h3>Protagonistas</h3>
				<ul>
					{personajes.map((pers) => (
						<li key={pers.url} onClick={() => setPersonajeSeleccionado(pers)} style={{ cursor: 'pointer' }}>
							{pers.name}
						</li>
					))}
				</ul>
			</div>

			{personajeSeleccionado && (
				<div className="ficha-personaje">
					<h4>{personajeSeleccionado.name}</h4>
					<div className="datos">
						<p>Género: {personajeSeleccionado.gender}</p>
						<p>Altura: {personajeSeleccionado.height} cm</p>
						<p>Peso: {personajeSeleccionado.mass} kg</p>
						<p>Color de pelo: {personajeSeleccionado.hair_color}</p>
						<p>Color de ojos: {personajeSeleccionado.eye_color}</p>
					</div>
				</div>
			)}

			{error && <p className="error">Se ha producido un error: {error}</p>}
		</div>
	);
};

export default PeliculaDetalle;
