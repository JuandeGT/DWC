'use strict';

const pintarMisiones = (contenedor, misiones) => {
	contenedor.innerHTML = '';
	if (misiones) {
		let plantilla = '';
		for (let mision of misiones) {
			plantilla += `
            <div class='carta'>
                <h2>${mision.nombre}</h2>
                <p>Prioridad: ${mision.prioridad}</p>
                <p>Equipamiento: ${mision.equipamiento.map((e) => {
									return `${e} `;
								})}</p>
                <p>Planeta destino: ${mision.planeta}</p>
                `;
			if (mision.imagen !== '') {
				plantilla += `<img class='carta-img' src='${mision.imagen}' alt='Imagen Mision.' />`;
			}
			plantilla += `
                <br/>
                <br/>
                <button id='${mision.id}'>Borrar Misión</button>
            </div>`;
		}
		contenedor.innerHTML = plantilla;
	}
};

const borrarMision = (id, misiones) => {
	let misionesNuevas = misiones.filter((m) => {
		return m.id !== id;
	});
	return misionesNuevas;
};

const buscarMisiones = (buscar, misiones) => {
	buscar = buscar.toLowerCase();
	let mision = misiones.filter((m) => {
		return m.nombre.toLowerCase().includes(buscar);
	});
	return mision;
};

export { pintarMisiones, borrarMision, buscarMisiones };
