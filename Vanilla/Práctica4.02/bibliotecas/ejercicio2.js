'use strict';

const crearTabla = () => {
	let num = 1;
	document.body.insertAdjacentHTML('beforeend', '<table id="tabla"></table>');
	const table = document.getElementById('tabla');
	for (let i = 0; i < 10; i++) {
		table.insertAdjacentHTML('beforeend', `<tr id="fila${i}"></tr>`);
		const line = document.getElementById(`fila${i}`);
		for (let i = 0; i < 10; i++) {
			line.insertAdjacentHTML('beforeend', `<td class="numero">${num}</td>`);
			num++;
		}
	}
};

const cambiarTabla = () => {
	let dato = document.getElementsByClassName('numero');
	for (let i = 0; i < dato.length; i++) {
		const valor = parseInt(dato[i].innerHTML);
		let primo = true; // Pasarle una función separada primo

		if (valor == 1) primo = false; // No puede entrar al for ya que saldría primo y no lo es.
		for (let j = 2; j * j <= valor; j++) {
			if (valor % j === 0) {
				primo = false;
				break; // Usamos el break porque solo nos hace falta encontrar un divisor, da igual si tiene más.
			}
		}
		if (primo) {
			dato[i].classList.add('primo');
		}
	}
};

export { crearTabla, cambiarTabla };
