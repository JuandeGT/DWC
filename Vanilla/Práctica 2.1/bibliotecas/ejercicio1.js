"use strict";

function calcularIMC(masa, altura) {
	let IMC;
	if (!isNaN(masa) || !isNaN(altura)) {
		IMC = masa / (altura * altura);
	}
	return IMC;
}

function compararIMC(imcMarcos, imcJuan) {
	return imcMarcos > imcJuan;
}

export { calcularIMC, compararIMC };
