'use strict';

const traerDatos = async (url) => {
	try {
		let respuesta = await fetch(url);
		if (respuesta.ok) {
			let datos = await respuesta.json();
			if (datos.results) {
				return datos.results;
			}
			return datos;
		} else {
			throw new Error('No se han podido traer los datos de la api');
		}
	} catch (error) {
		throw error;
	}
};

const guardarLocalStorage = (datos) => {
	localStorage.setItem('planetas', JSON.stringify(datos));
};

const obtenerLocalStorage = () => {
	let datos = localStorage.getItem('planetas');
	return datos ? JSON.parse(datos) : [];
};

export { traerDatos, guardarLocalStorage, obtenerLocalStorage };
