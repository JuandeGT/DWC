'use strict';

function multiplosTres(num) {
	if (Number.isInteger(num) && num > 0) {
		console.log('Los múltiplos de 3 son: ');
		for (let i = 1; i <= num; i++) {
			if (i % 3 === 0) {
				console.log(`${i} `);
			}
		}
	} else {
		console.log('El número introducido no es entero o mayor que 0');
	}
}

export { multiplosTres };
