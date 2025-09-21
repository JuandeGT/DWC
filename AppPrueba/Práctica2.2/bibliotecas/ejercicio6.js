'use strict';

function calculadora(num1, num2, operador) {
	if (Number.isInteger(num1) && Number.isInteger(num2)) {
		let resul;
		switch (operador) {
			case '+':
				resul = sumar(num1, num2);
				break;
			case '-':
				resul = restar(num1, num2);
				break;
			case '*':
				resul = multiplicar(num1, num2);
				break;
			case '/':
				resul = dividir(num1, num2);
				break;
			case '%':
				resul = modulo(num1, num2);
				break;
			default:
				console.log(`El operador ${operador} no es válido.`);
				return;
		}
		console.log(`El resultado de ${num1} ${operador} ${num2} es ${resul}`);
	} else {
		console.log('Los números introducidos no son enteros');
	}
}

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;
const modulo = (num1, num2) => num1 % num2;

export { calculadora };
