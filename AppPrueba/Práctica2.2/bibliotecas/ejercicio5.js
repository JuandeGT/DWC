'use strict';

function media() {
	let resul = 0;
	let numeros = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (Number.isInteger(arguments[i]) && arguments[i] >= 0) {
			resul += arguments[i];
			numeros++;
		}
	}
	resul = resul / numeros;
	console.log(`La media es: ${resul}`);
}

export { media };
