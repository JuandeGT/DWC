"use strict";

const crearPiezas = (imagenes) => {
	const piezas = document.getElementById("piezas");
	for (let i = 0; i < imagenes.length; i++) {
		piezas.insertAdjacentHTML(
			"beforeend",
			`<img id="${i + 1}" class="arrastable"/>`
		);
		document.getElementById(`${i + 1}`).src = imagenes[i];
	}
};

export { crearPiezas };
