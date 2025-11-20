"use strict";

const mostrar = (curso) => {
	for (let dato in curso) {
		// Comprobamos que JSON realmente tenga esa propiedad con su método hasOwnProperty.
		if (curso.hasOwnProperty(dato)) {
			// Mostramos en la terminal la clave junto a su valor y el tipo de datos.
			console.log(
				`El dato es ${dato} con el valor ${
					curso[dato]
				} y de tipo ${typeof curso[dato]}.\n`
			);
		}
	}
};

export { mostrar };
