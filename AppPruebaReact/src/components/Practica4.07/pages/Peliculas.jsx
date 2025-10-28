import React from "react";
import { useNavigate } from "react-router-dom";
import DatosPeliculas from "../peliculas.json";

const Peliculas = () => {
	const navigate = useNavigate();

	const detalle = (id) => {
		navigate(`/peliculaDetalle:${id}`);
	};

	return (
		<div className="peliculas">
			{DatosPeliculas.peliculas.map((peli) => {
				<div
					onClick={() => {
						detalle(peli.id);
					}}
				>
					<h2>Título: {peli.nombre}</h2>
					<img src={peli.cartelera} alt="Cartelera" />
				</div>;
			})}
		</div>
	);
};

export default Peliculas;
