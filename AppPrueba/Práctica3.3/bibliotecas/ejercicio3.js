"use strict";

const discente = (id, nombre, apellidos, aficiones, notas) => {
	return {
		id: id,
		nombre: nombre,
		apellidos: apellidos,
		aficiones: [aficiones],
		notas: {
			primeraNota: notas.primeraNota,
			segundaNota: notas.segundaNota,
			terceraNota: notas.terceraNota,
		},
		calcularMedia: () => {
			let media = 0;
			for (let i = 0; i < notas.length; i++) {
				media += notas[i];
			}
			return media / notas.length;
		},
		imprimirAficiones: () => {
			let imprimir = "Aficiones: ";
			for (let dato in discente.aficiones) {
				imprimir += `${dato}, `;
			}
			return imprimir;
		},
	};
};

export { discente };
