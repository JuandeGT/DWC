'use strict';

const traerPeliculas = (url) => {
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

const traerPersonajes = (urls) => {
	const primerasDiez = urls.slice(0, 10); // Cogemos solo las 10 primeras urls

	const peticiones = primerasDiez.map((url) => {
		return fetch(url).then((respuesta) => {
			return respuesta.json();
		});
	});

	return Promise.all(peticiones)
		.then((datos) => {
			return datos;
		})
		.catch((error) => {
			//En caso de error
			return error;
		});
};

export { traerPeliculas, traerPersonajes };
