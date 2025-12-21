'use strict';

const traerPeliculas = async (url) => {
	try {
		let respuesta = await fetch(url);
		if (respuesta.ok) {
			let resultado = await respuesta.json();
			return resultado.results;
		}
	} catch (error) {
		throw new Error('Error al traer las películas.');
	}
};

const traerDatos = async (url) => {
	try {
		let respuesta = await fetch(url);
		if (respuesta.ok) {
			let resultado = await respuesta.json();
			return resultado;
		}
	} catch (error) {
		throw new Error('Error al traer las películas.');
	}
};

const traerPersonajes = async (urls) => {
	const primerasDiez = urls.slice(0, 10);
	try {
		let respuesta = primerasDiez.map((url) => {
			return traerDatos(url);
		});
		let resultado = await Promise.allSettled(respuesta);
		let datos = resultado.map((r) => {
			return r.value;
		});
		return datos;
	} catch (error) {
		throw error;
	}
};

const traerVehiculos = async (urls) => {
	try {
		let respuesta = urls.map((url) => {
			return traerDatos(url);
		});
		let resultado = await Promise.allSettled(respuesta);
		let datos = resultado.map((r) => {
			return r.value;
		});
		return datos;
	} catch (error) {
		throw error;
	}
};

export { traerPeliculas, traerPersonajes, traerVehiculos };
