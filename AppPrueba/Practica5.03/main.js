"use strict";

import {
	crearLienzo,
	pintarLienzo,
	reiniciarLienzo,
} from "./bibliotecas/ejercicio1.js";

crearLienzo();

let color;
let colorSeleccionado = false;
const colores = document.getElementById("colores");
colores.addEventListener("click", (event) => {
	if (event.target.parentNode.classList.value === "seleccionar") {
		colorSeleccionado = true;
	} else {
		colorSeleccionado = false;
		color = event.target.parentNode.parentNode.classList.value;
		const listaColores = colores.children;
		for (let i = 0; i < listaColores.length; i++) {
			if (listaColores[i].classList.value === color) {
				listaColores[i].classList.add("seleccionado");
			} else {
				listaColores[i].classList.remove("seleccionado");
			}
		}
	}
});

const lienzo = document.getElementById("tabla");
let pintar = false;
lienzo.addEventListener("mousedown", (event) => {
	pintar = true;
	if (colorSeleccionado) {
		color = document.getElementsByClassName("seleccionar")[0].children[0].value;
	}
	pintarLienzo(event, color);
});

lienzo.addEventListener("mouseover", (event) => {
	if (pintar) {
		pintarLienzo(event, color);
	}
});

// El mouseup se hace el todo el documento en vez del lienzo para evitar que siga pintando en casos específicos
document.addEventListener("mouseup", () => {
	pintar = false;
});

document.getElementsByTagName("button")[0].addEventListener("click", () => {
	reiniciarLienzo();
});
