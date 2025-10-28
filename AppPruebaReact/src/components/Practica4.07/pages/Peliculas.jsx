import React from "react";
import { useNavigate } from "react-router-dom";
import datosPeliculas from "../peliculas.json";

const Peliculas = () => {
	const navigate = useNavigate();

	const detalle = (id) => {
		navigate(`/peliculaDetalle:${id}`);
	};

	return (
		<div className="peliculas">
			{datosPeliculas.peliculas.map((peli) => (
				<div
					onClick={() => {
						detalle(peli.id);
					}}
				>
					<h2>Título: {peli.nombre}</h2>
					<img src={peli.cartelera} />
				</div>
			))}
		</div>
	);
};

export default Peliculas;
