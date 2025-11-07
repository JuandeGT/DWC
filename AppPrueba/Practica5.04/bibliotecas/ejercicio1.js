"use strict";

const crearPiezas = (imagenes) => {
	const piezas = document.getElementById("piezas");
	for (let i = 0; i < imagenes.length; i++) {
		piezas.insertAdjacentHTML(
			"beforeend",
			`<div id="${i + 1}" class="arrastable"><img/></div>`
		);
		document.getElementById(`${i + 1}`).children[0].src = imagenes[i];
	}
};

export { crearPiezas };
