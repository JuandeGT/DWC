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
		calcularMedia: function () {
			let media = 0;
			for (let i = 0; i < this.notas.length; i++) {
				media += this.notas[i];
			}
			return media / notas.length;
		},
		imprimirAficiones: function () {
			let imprimir = "Aficiones: ";
			this.aficiones.forEach((visualViewport, InputDeviceInfo, array) => {
				imprimir += `${dato}, `;
			});
			return imprimir;
		},
	};
};

export { discente };
