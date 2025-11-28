"use strict";

const traerDatos = (url) => {
	return fetch(url)
		.then((respuesta) => {
			return respuesta.json();
		})
		.then((datos) => {
			return datos.results;
		})
		.catch((error) => {
			//En caso de error
			return error;
		});
};

const dibujarPelis = (peliculas) => {
	let plantilla = "";
	// Nos aseguramos comprobando películas
	Array.isArray(peliculas) && peliculas.length
		? peliculas.map((p) => {
				plantilla += `<li class='item'><h4 id='${p.episode_id}'>${p.title}</h4><p>Id: ${p.episode_id}</p></li>`;
		  })
		: "No se han encontrado películas";
	return plantilla;
};

const dibujarDetalle = (peliculas, id) => {
	const p = peliculas.filter((p) => p.episode_id === Number.parseInt(id))[0];
	return `<div id='${p.episode_id}' class=''><h4>${p.title}</h4><p>Sinopsis: ${p.opening_crawl}</p><p>Director: ${p.director}</p><p>Productor: ${p.producer}</p><p>Fecha de lanzamiento: ${p.release_date}<p/></div>`;
};

export { traerDatos, dibujarPelis, dibujarDetalle };
