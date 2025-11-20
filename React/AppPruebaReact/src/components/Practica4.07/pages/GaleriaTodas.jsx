import React from "react";
import datosPeliculas from "../assets/peliculas.json";

const GaleriaTodas = () => {
	return (
		<>
			{datosPeliculas.peliculas.map((peli) => (
				<div key={crypto.randomUUID()} className="actores">
					<div key={crypto.randomUUID()}>
						<img src={peli.cartelera} alt="Imagen" />
					</div>
				</div>
			))}
		</>
	);
};

export default GaleriaTodas;
