"use strict";

const mostrarInfo = (evento) => {
	evento.target.nextElementSibling.classList.toggle("oculto");
};

export { mostrarInfo };
