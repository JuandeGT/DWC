'use strict';

const traerDatosApi = async (url) => {
	try {
		let respuesta = await fetch(url);
		if (respuesta.ok) {
			let resultado = await respuesta.json();
			return resultado;
		}
	} catch (error) {
		throw new Error('Error al traer las películas.');
	}
};

const pintarApi = (pelis, listaPeli) => {
	listaPeli.innerHTML = '';
	if (pelis.length > 0) {
		let plantilla = '';
		for (let peli of pelis) {
			plantilla += `<p id='${peli.id}'>${peli.titulo}</p>`;
		}
		listaPeli.innerHTML = plantilla;
	}
};

const pintarPeliDetalle = (peli, lista) => {
	if (peli) {
		lista.innerHTML = `
        <div>
            <h2>${peli.titulo}</h2>
            <p>Año: ${peli.año}</p>
            <p>Director: ${peli.director}</p>
            <button value='${peli.id}'>Cargar Personajes</button>
        </div>`;
	}
};

const traerPersonajes = async (urls) => {
	try {
		let respuesta = urls.map((url) => {
			return traerDatosApi(url);
		});
		let resultado = await Promise.allSettled(respuesta);
		let datos = resultado.map((r) => {
			return r.value;
		});
		return datos;
	} catch (error) {
		throw error;
	}
};

const pintarPersonajes = (personajes, peliDetalle) => {
	let plantilla = '';
	for (let p of personajes) {
		plantilla += `
        <div id ='${p.id}'>
            <h2>${p.nombre}</h2>
            <p>Rol: ${p.rol}</p>
            <p>Planeta: ${p.planeta}</p>
        </div>`;
	}
	peliDetalle.insertAdjacentHTML('beforeend', plantilla);
};

export { traerDatosApi, pintarApi, pintarPeliDetalle, traerPersonajes, pintarPersonajes };
