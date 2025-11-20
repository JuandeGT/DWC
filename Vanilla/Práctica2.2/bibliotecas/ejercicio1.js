'use strict';

function numMes(num) {
	let array = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	];
	if (Number.isInteger(num)) {
		//El isInteger lo he buscado para saber si es entero
		if (num > 0 && num < 13) {
			console.log(`El mes que corresponde al número ${num} es ${array[num - 1]}`);
		} else {
			console.log('El número introducido no está entre el 1 y el 12');
		}
	} else {
		console.log('El valor introducido no es un entero');
	}
}

export { numMes };
