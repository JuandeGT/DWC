'use strict';

const cambioP = () => {
	let num = Math.floor(Math.random() * 5) + 1;
	let colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16); //Fórmula sacada de internet que me genera un hexadecimal aleatorio para añadirle el # y que sea válido como color en css

	document.getElementById(`${num}`).style.backgroundColor = colorAleatorio;

	// Extra para dividir el color y ver si es claro u oscuro y cambiar el color del texto para que se note
	const r = parseInt(colorAleatorio.substring(1, 3), 16);
	const g = parseInt(colorAleatorio.substring(3, 5), 16);
	const b = parseInt(colorAleatorio.substring(5, 7), 16);

	// Fórmula de luminosidad (cahtgpt)
	const luminosidad = 0.299 * r + 0.587 * g + 0.114 * b;

	// if para comprobar si es oscuro
	if (luminosidad < 128) {
		document.getElementById(`${num}`).style.color = 'white';
	} else {
		document.getElementById(`${num}`).style.color = 'black';
	}
};

setInterval(() => {
	cambioP();
}, 1000);
