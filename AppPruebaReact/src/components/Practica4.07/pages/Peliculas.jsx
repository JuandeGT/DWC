import React from 'react';
import { useNavigate } from 'react-router-dom';
import datosPeliculas from '../assets/peliculas.json';
import './Peliculas.css';

const Peliculas = () => {
	const navigate = useNavigate();

	const detalle = (id) => {
		navigate(`/peliculaDetalle/${id}`);
	};

	return (
		<div className="peliculas">
			{datosPeliculas.peliculas.map((peli) => (
				<div
					onClick={() => {
						detalle(peli.id);
					}}
					key={crypto.randomUUID()}
				>
					<h2>Título: {peli.nombre}</h2>
					<img src={peli.cartelera} />
				</div>
			))}
		</div>
	);
};

export default Peliculas;
