"use strict";

import {
	traerDatos,
	dibujarPelis,
	dibujarDetalle,
} from "./bibliotecas/ejercicio1.js";

window.onload = () => {
	const listado = document.getElementById("listado");
	const detalle = document.getElementById("detalle");
	const urlStarWars = "https://swapi.dev/api/films/";

	let datosPeli = "";
	const datos = async () => {
		try {
			datosPeli = await traerDatos(urlStarWars);
			listado.innerHTML = dibujarPelis(datosPeli);
		} catch (error) {
			listado.innerHTML = `Se ha producido un error: ${error.menssage}`;
		}
	};
	datos();

	listado.addEventListener("click", (evento) => {
		if (evento.target.tagName === "LI") {
			detalle.innerHTML = dibujarDetalle(datosPeli, evento.target.id);
		}
		if (evento.target.tagName === "H4" || evento.target.tagName === "P") {
			detalle.innerHTML = dibujarDetalle(
				datosPeli,
				evento.target.parentNode.id
			);
		}
	});
}; // Fin del window onload
