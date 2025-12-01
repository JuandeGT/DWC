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
				plantilla += `<li class='item' id='${p.episode_id}><h4'>${p.title}</h4><p>Id: ${p.episode_id}</p></li>`;
		  })
		: "No se han encontrado películas";
	return plantilla;
};

const dibujarDetalle = (peliculas, id) => {
	const p = peliculas.filter((p) => p.episode_id === Number.parseInt(id))[0];
	return `<div id='${p.episode_id}' class=''><h4>${p.title}</h4><p>Sinopsis: ${
		p.opening_crawl
	}</p><p>Director: ${p.director}</p><p>Productor: ${
		p.producer
	}</p><p>Fecha de lanzamiento: ${formatearFecha(p.release_date)}<p/></div>`;
};

const formatearFecha = (fecha) => {
	const partes = fecha.split("-");
	return `${partes[2]}/${partes[1]}/${partes[0]}`;
};

export { traerDatos, dibujarPelis, dibujarDetalle };
