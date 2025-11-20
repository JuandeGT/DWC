'use strict';

import {
	recogerDatos,
	mostrarDiscos,
	validarFormulario,
	mostrarErrores,
	limpiarErrores,
	cambiarDataList,
	buscarDisco,
	eliminarDisco,
} from './bibliotecas/ejercicio1.js';

window.onload = () => {
	if (typeof Storage !== 'undefined') {
		const formulario = document.forms.formulario;
		const datalist = document.getElementById('nombresDiscos');

		let discos = [];
		let discosLocal = localStorage.getItem('discos');
		if (discosLocal) {
			discos = JSON.parse(discosLocal);
		}

		let id;
		if (discos.length) {
			id = discos[discos.length - 1].id + 1; // El id tiene que ser a partir del último que está en el localStorage
		} else {
			id = 0;
		}
		const divErrores = document.getElementById('errores');
		document.getElementById('botonGuardar').addEventListener('click', () => {
			const camposError = document.getElementsByClassName('error');
			limpiarErrores(divErrores, camposError);
			let errores = validarFormulario(formulario);
			if (!errores) {
				let disco = recogerDatos(formulario, id);
				discos = [...discos, disco];
				localStorage.setItem('discos', JSON.stringify(discos));
				id++;
				formulario.reset(); //Borramos el formulario al guardarlo para que no moleste al usuario
			} else {
				mostrarErrores(errores, divErrores);
			}
			cambiarDataList(discos, datalist);
		});

		const divMostrar = document.getElementById('mostrar');
		divMostrar.addEventListener('click', (evento) => {
			if (evento.target.tagName === 'IMG') {
				const confirmar = confirm(
					`Seguro que quieres borrar el disco ${evento.target.parentElement.children[0].innerHTML}?`
				); // Confirmación usando confirm (propuesto por chatgpt)
				if (confirmar) {
					discos = eliminarDisco(evento.target.parentElement.id, discos);
					localStorage.setItem('discos', JSON.stringify(discos));
					mostrarDiscos(divMostrar, discos);
				}
			}
		});

		document.getElementById('botonMostrar').addEventListener('click', () => {
			mostrarDiscos(divMostrar, discos);
		});

		document.getElementById('botonBuscar').addEventListener('click', () => {
			const nombreBuscar = document.getElementById('nomBusqueda').value;
			if (nombreBuscar) {
				buscarDisco(discos, nombreBuscar, divMostrar);
			}
		});

		//Hay que prevenir que al pulsar el intro en el texto de búsqueda se haga un submit recargando la página
		document.forms.busqueda.addEventListener('submit', (evento) => {
			evento.preventDefault();
		});

		document.getElementById('botonLimpiar').addEventListener('click', () => {
			discos = [];
			localStorage.setItem('discos', JSON.stringify([])); // Ponemos el localStorage limpio
			divMostrar.innerHTML = '';
		});
	}
}; //Fin del window onload
