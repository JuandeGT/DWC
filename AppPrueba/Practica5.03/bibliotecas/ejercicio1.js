"use strict";

const crearLienzo = () => {
	document
		.getElementById("lienzo")
		.insertAdjacentHTML("beforeend", '<table id="tabla"></table>');
	const tabla = document.getElementById("tabla");
	for (let i = 1; i < 61; i++) {
		tabla.insertAdjacentHTML("beforeend", `<tr id=fila${i}></tr>`);
		const fila = document.getElementById(`fila${i}`);
		for (let j = 1; j < 61; j++) {
			fila.insertAdjacentHTML(
				"beforeend",
				`<td id=${i}elemento${j} class="elemento"></td>`
			);
		}
	}
};

export { crearLienzo };
