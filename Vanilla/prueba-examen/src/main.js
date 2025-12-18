'use strict';

import { pintarApi, pintarPeliDetalle, pintarPersonajes, traerDatosApi, traerPersonajes } from './biblioteca/api.js';
import {
	datosFormulario,
	validarDatos,
	contenedorInfo,
	mostrarInfo,
	borrarFormulario,
	vaciarInfo,
} from './biblioteca/formulario.js';

import { añadirLocalStorage, traerLocalStorage } from './biblioteca/local.js';
import { borrarMision, buscarMisiones, pintarMisiones } from './biblioteca/misiones.js';

window.onload = () => {
	const formulario = document.forms.formMision;
	const botones = document.getElementsByClassName('botones')[0];
	contenedorInfo(botones);
	const info = document.getElementById('info');
	let misiones = [];
	const contenedorMisiones = document.getElementById('contenedorMisiones');
	const buscador = document.getElementById('inputBusqueda');
	const url = 'http://localhost:3000/peliculas';
	const listaPeli = document.getElementById('listaPeliculas');
	const seccionApi = document.getElementById('api-section');
	const detallePeli = document.getElementById('detallePelicula');
	let peliculas = [];

	if (typeof Storage !== 'undefined') {
		misiones = traerLocalStorage();
		pintarMisiones(contenedorMisiones, misiones);
		formulario.addEventListener('click', (evento) => {
			//console.log(formulario[1].value);
			if (evento.target.type === 'button') {
				if (evento.target.nextElementSibling && evento.target.nextElementSibling.type === 'button') {
					let misionNueva = datosFormulario(formulario);
					if (!validarDatos(misionNueva)) {
						mostrarInfo(info);
					} else {
						mostrarInfo(info);
						setTimeout(() => {
							vaciarInfo(info);
						}, 2000);
						borrarFormulario(formulario);
						misiones = [...misiones, misionNueva];
						añadirLocalStorage(misiones);
						pintarMisiones(contenedorMisiones, misiones);
					}
				} else {
					misiones = [];
					añadirLocalStorage(misiones);
					pintarMisiones(contenedorMisiones, misiones);
				}
			}
		});

		contenedorMisiones.addEventListener('click', (evento) => {
			if (evento.target.tagName === 'BUTTON') {
				let nuevasMisones = borrarMision(evento.target.id, misiones);
				misiones = nuevasMisones;
				añadirLocalStorage(misiones);
				pintarMisiones(contenedorMisiones, misiones);
			}
		});

		buscador.addEventListener('input', (evento) => {
			let misionBuscar = buscarMisiones(evento.target.value, misiones);
			pintarMisiones(contenedorMisiones, misionBuscar);
		});
	}

	const traerApi = async () => {
		try {
			peliculas = await traerDatosApi(url);
			pintarApi(peliculas, listaPeli);
		} catch (error) {
			listaPeli.innerHTML = error;
		}
	};

	const traerPersonajesMain = async (pers) => {
		//try catch
		let personajes = await traerPersonajes(pers);
		pintarPersonajes(personajes, detallePeli);
		return personajes;
	};

	seccionApi.addEventListener('click', (evento) => {
		if (evento.target.tagName === 'BUTTON' && evento.target.id === 'btnCargarAPI') {
			traerApi();
		}
		if (evento.target.tagName === 'P') {
			let peliDetalle = peliculas.find((p) => {
				return p.id === evento.target.id;
			});
			pintarPeliDetalle(peliDetalle, detallePeli);
		}
		if (evento.target.tagName === 'BUTTON' && !evento.target.nextElementSibling) {
			let peliPersonajes = peliculas.find((p) => {
				return p.id === evento.target.value;
			});
			traerPersonajesMain(peliPersonajes.personajes);
		}
	});
}; // Fin del window.onload
