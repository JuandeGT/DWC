"use strict";

const censurarPalabra = () => {
	let cuerpo = document.body;
	//console.log(cuerpo);
	let nuevo = cuerpo.innerHTML.replaceAll(
		"sexo",
		'<em class="contenidoExplicito">Contenido Bloqueado</em>' //Aprovecho añadiendo em para tener la cursiva ya aplicada
	);
	cuerpo.innerHTML = nuevo;
};

export { censurarPalabra };
