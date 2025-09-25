"use strict";

const curso = (nombre, anyo, alumnado, descripcion) => {
	if (typeof descripcion == "undefined") {
		// Comprobamos si no hay descripción para asignarle un valor por defecto
		descripcion = "Descripcion del curso vacía";
	}
	return {
		nombre: nombre,
		anyo: anyo,
		alumnado: [alumnado],
		descripcion: descripcion,
	};
};

export { curso };
