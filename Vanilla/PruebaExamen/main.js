"use strict";

import { recogerFormulario } from "./bibliotecas/formulario.js";
import { mostrarPlanetas } from "./bibliotecas/listarPlanetas.js";
import { traerDatosRapido } from "./bibliotecas/api.js";

window.onload = () => {
	const formulario = document.forms.agregarPlaneta;
	const listaPlanetas = document.getElementsByClassName("listaPlanetas")[0];
	let planetas = [];
	let url = "http://swapi.py4e.com/api/people/"; // results
	let urls = [
		"https://swapi.py4e.com/api/people/",
		"https://swapi.info/api/people",
	];

	if (typeof Storage !== "undefined") {
		const datos = async () => {
			try {
				const personajes = await traerDatosRapido(urls);
			} catch (error) {
				console.log(error.message);
			}
			formulario.addEventListener("click", (evento) => {
				if (evento.target.type === "button") {
					// Botón Guardar Planetas
					if (evento.target.nextElementSibling) {
						let planetaNuevo = recogerFormulario(formulario);
						planetas = [...planetas, planetaNuevo];
					}
					// Botón Mostrar Planetas
					if (evento.target.nextElementSibling === null) {
						if (planetas.length > 0) {
							// Comprobar si tiene la clase
							listaPlanetas.classList.remove("ocultar");
							listaPlanetas.insertAdjacentHTML(
								"beforeend",
								mostrarPlanetas(planetas)
							);
						}
					}
				}
			});
		};
		datos();
	}
};
