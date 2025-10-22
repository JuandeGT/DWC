"use strict";

const carrusel = (imagenes) => {
	document.body.insertAdjacentHTML("beforeend", '<div id="carrusel"></div>');
	const carrusel = document.getElementById("carrusel");
	carrusel.insertAdjacentHTML(
		"beforeend",
		`<img id="imagen" class="visible" src="${imagenes[0]}"></img>`
	);
};

const cambiarImg = (num, imagenes) => {
	const foto = document.getElementById("imagen");
	foto.classList.remove("visible");
	setTimeout(() => {
		foto.src = imagenes[num];
		foto.classList.add("visible");
	}, 500);
};

export { carrusel, cambiarImg };
