'use strict';

import {
	obtenerDatosFormulario,
	validarDatos,
	divInformacion,
	mostrarInfo,
	limpiarInfo,
} from './biblioteca/formulario.js';
import { guardarLocalStorage, obtenerLocalStorage, traerDatos } from './biblioteca/datos.js';

window.onload = () => {
	const formulario = document.forms.agregarPlaneta;
	const listarPlanetas = document.getElementsByTagName('script')[0].previousElementSibling;
	let url = 'https://swapi.py4e.com/api/planets/';
	let planetas = [];

	if (typeof Storage !== 'undefined') {
		const cargarDatos = async () => {
			try {
				planetas = obtenerLocalStorage();
				if (planetas.length === 0) {
					planetas = await traerDatos(url);
					guardarLocalStorage(planetas);
				}
			} catch (error) {
				document.body.innerHTML = '<h1>No se puede cargar la api</h1>';
			}

			formulario.addEventListener(
				'click',
				(evento) => {
					divInformacion(formulario);
					const divInfo = document.getElementById('informacion');
					// Logica botones
					if (evento.target.type === 'button') {
						if (evento.target.nextElementSibling && evento.target.nextElementSibling.type === 'button') {
							let planetaNuevo = obtenerDatosFormulario(formulario);
							if (validarDatos(planetaNuevo)) {
								planetas = [...planetas, planetaNuevo];
								guardarLocalStorage(planetas);
							}
							mostrarInfo(divInfo, formulario);
						} else {
						}
					}
				},
				false
			);
		};
		cargarDatos();
	}
}; //Fin del window.onload
