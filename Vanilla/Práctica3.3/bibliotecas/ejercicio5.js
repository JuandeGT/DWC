'use strict';

function imprimirObjeto(objeto) {
	for (let prop in objeto) {
		let valor = objeto[prop];

		if (typeof valor === 'number') {
			console.log(`${prop}: (Número) ${valor}.`);
		} else if (typeof valor === 'string') {
			console.log(`${prop}: (String) "${valor}".`);
		} else if (Array.isArray(valor)) {
			console.log(`${prop}: (Array) ${valor}`);
		} else if (typeof valor === 'object') {
			console.log(`${prop}: (Obbjeto).`);
			imprimirObjeto(valor); // recursividad
		} else if (typeof valor === 'function') {
			console.log(`${prop}: (Función)`);
			// ${valor} omito imprimir la función para que el formateo no sea tan grande y difícil de leer
		}
	}
}

export { imprimirObjeto };
