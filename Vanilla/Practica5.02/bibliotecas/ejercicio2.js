"use strict";

const contenidoPestana = (evento, num) => {
	const contenido = evento.target.parentNode.nextElementSibling.children;
	for (let i = 0; i < contenido.length; i++) {
		if (i === num) {
			contenido[i].classList.remove("oculto");
		} else {
			contenido[i].classList.add("oculto");
		}
	}
};

export { contenidoPestana };
