"use strict";

import { crearLienzo } from "./bibliotecas/ejercicio1.js";

crearLienzo();

let color;
const colores = document.getElementById("colores");
colores.addEventListener("click", (event) => {
	color = event.target.parentNode.parentNode.classList.value;
	console.log(color);
	const listaColores = colores.children;
	for (let i = 0; i < listaColores.length; i++) {
		if (listaColores[i].classList.value === color) {
			listaColores[i].classList.add("seleccionado");
		} else {
			listaColores[i].classList.remove("seleccionado");
		}
	}
});
