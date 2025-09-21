'use strict';

function analisisNumerico(numero) {
	if (!isNaN(numero)) {
		parImpar(numero);
		positivo(numero);
		primo(numero);
	} else {
		console.log('El valor introducido no es un número');
	}
}

function parImpar(num) {
	console.log(`El número ${num} es ${num % 2 === 0 ? 'par' : 'impar'}`);
}

function positivo(num) {
	if (num === 0) {
		console.log(`El número ${num} no es ni positivo ni negativo`);
	} else {
		if (num > 0) {
			console.log(`El número ${num} es positivo`);
		} else {
			console.log(`El número ${num} es negativo`);
		}
	}
}

function primo(num) {
	if (num > 1) {
		//Es necesario ya que son casos especiales
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				console.log(`El número ${num} no es primo`);
				return;
			}
		}
		console.log(`El número ${num} es primo`);
	} else {
		console.log(`El número ${num} no es primo`);
	}
}

export { analisisNumerico };
