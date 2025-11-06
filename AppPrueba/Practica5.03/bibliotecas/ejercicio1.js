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
				`<td id=elemento${j}_${i} class="elemento"></td>`
			);
		}
	}
};

const pintarLienzo = (event, color) => {
	if (event.target.tagName === "TD") {
		event.target.style.backgroundColor = color;
	}
};

const reiniciarLienzo = () => {
	const celdas = document.getElementsByTagName("td");
	for (let i = 0; i < celdas.length; i++) {
		celdas[i].style.backgroundColor = "white";
	}
};

export { crearLienzo, pintarLienzo, reiniciarLienzo };
