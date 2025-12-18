'use strict';

const añadirLocalStorage = (misiones) => {
	localStorage.setItem('misiones', JSON.stringify(misiones));
};

const traerLocalStorage = () => {
	let datos = JSON.parse(localStorage.getItem('misiones'));
	if (datos) {
		return datos;
	} else {
		return [];
	}
};

export { añadirLocalStorage, traerLocalStorage };
