'use strict';

import { recogerFormulario } from './bibliotecas/formulario.js';
import { mostrarPlanetas } from './bibliotecas/listarPlanetas.js';

window.onload = () => {
	const formulario = document.forms.agregarPlaneta;
	let planetas = [];
	const listaPlanetas = document.getElementsByClassName('listaPlanetas');

	formulario.addEventListener('click', (evento) => {
		if (evento.target.type === 'button') {
			// Botón Guardar Planetas
			if (evento.target.nextElementSibling) {
				let planetaNuevo = recogerFormulario(formulario);
				planetas = [...planetas, planetaNuevo];
			}
			// Botón Mostrar Planetas
			if (evento.target.nextElementSibling === null) {
				if (planetas.length > 0) {
					// Comprobar si tiene la clase
					listaPlanetas.classList.remove('ocultar');
					listaPlanetas.appendChild(mostrarPlanetas(planetas));
				}
			}
		}
	});
};
