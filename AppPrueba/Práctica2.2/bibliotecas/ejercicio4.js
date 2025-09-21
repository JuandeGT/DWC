'use strict';

function potencia(num1, num2) {
	if (Number.isInteger(num1) && Number.isInteger(num2)) {
		let resul = 1;
		let i = 0;

		while (i < num2) {
			resul *= num1;
			i++;
		}
		console.log(`${num1} elevado a ${num2} es ${resul}`);
	}
}

export { potencia };
