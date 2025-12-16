"use strict";

const traerDatos = async (url) => {
	try {
		let respuesta = await fetch(url);

		if (respuesta.ok) {
			respuesta = await respuesta.json();

			if (respuesta.results) return respuesta.results;
			return respuesta;
		} else {
			throw new Error("No se han podido traer los datos");
		}
	} catch (error) {
		throw error;
	}
};

const traerDatosRapido = async (urls) => {
	let promesas = urls.map((url) => {
		return traerDatos(url);
	});
	let promesaHecha = await Promise.any(promesas);
	return promesaHecha;
};

export { traerDatos, traerDatosRapido };
