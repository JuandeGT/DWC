'use strict';

const discente = (id, nombre, apellidos, aficiones, notas) => {
	return {
		id: id,
		nombre: nombre,
		apellidos: apellidos,
		aficiones: aficiones,
		notas: {
			primeraNota: notas.primeraNota,
			segundaNota: notas.segundaNota,
			terceraNota: notas.terceraNota,
		},
		calcularMedia: function () {
			return (this.notas.primeraNota + this.notas.segundaNota + this.notas.terceraNota) / 3;
		},
		imprimirAficiones: function () {
			let imprimir = 'Aficiones: ';
			this.aficiones.forEach((dato) => {
				imprimir += `${dato} `;
			});
			return imprimir;
		},
		imprimirInforme: function () {
			return `ID: ${this.id}\nNombre: ${this.nombre}\nApellidos: ${
				this.apellidos
			}\n${this.imprimirAficiones()}\nNotas:\nNota 1.ª Evaluación: ${this.notas.primeraNota}\nNota 2.ª Evaluación: ${
				this.notas.segundaNota
			}\nNota 3.ª Evaluación: ${this.notas.terceraNota}\n`;
		},
	};
};

export { discente };
