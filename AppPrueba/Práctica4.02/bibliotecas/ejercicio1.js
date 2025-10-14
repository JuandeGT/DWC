"use strict";

const censurarPalabra = () => {
	let cuerpo = document.body;
	//console.log(cuerpo);
	let nuevo = cuerpo.innerHTML.replaceAll("sexo", "Contenido Bloqueado");
	cuerpo.innerHTML = nuevo;
};

export { censurarPalabra };
