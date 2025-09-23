"use strict";

const constructor = (nombre, anyo, descripcion, alumnado) => {
	return {
		nombre: nombre,
		anyo: anyo,
		alumnado: [alumnado],
		descripcion: function (descripcion) {
			if (typeof descripcion == "undefined") {
				return "Descripcion del curso";
			} else {
				return descripcion;
			}
		},
	};
};

export { constructor };
