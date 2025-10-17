"use strict";

const carruselImg = () => {
	let numImg = 0;
	const imagenes = [
		"https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F2f49650ed42b1-Para-que-e-usado-o-JavaScript.jpg",
		"https://media.revistagq.com/photos/5d1348c16994dc0dc677750c/16:9/w_2560%2Cc_limit/doraemon.jpg",
		"https://m.media-amazon.com/images/S/pv-target-images/ffa6da5cbfd00855c63ecacd0e51aed6afac29367af3c2503b732daab5adf648._SX1080_FMjpg_.jpg",
		"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/379720/capsule_616x353.jpg?t=1750784856",
	];
	const carrusel = document.body.insertAdjacentHTML(
		"beforeend",
		'<div id="carrusel"></div>'
	);
	carrusel.insertAdjacentHTML("beforeend", `<img id="imagen"></img>`);
	const foto = document.getElementById("imagen");
	foto.src = imagenes[numImg];
	numImg++;

	setInterval(() => {
		carruselImg();
	}, 2000);
};

export { carruselImg };
