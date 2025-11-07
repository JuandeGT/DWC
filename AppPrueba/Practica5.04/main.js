"use strict";

import { crearPiezas } from "./bibliotecas/ejercicio1.js";

window.onload = () => {
	//Hacer temporizador
	const imagenes = [
		"./images/1.png",
		"./images/2.png",
		"./images/3.png",
		"./images/4.png",
		"./images/5.png",
		"./images/6.png",
		"./images/7.png",
		"./images/8.png",
		"./images/9.png",
	];

	crearPiezas(imagenes);

	const arrastables = document.getElementsByClassName("arrastable");
	for (let i = 0; i < arrastables; i++) {
		arrastables[i].setAttribute("draggable", true);
	}

	document.getElementById("piezas").addEventListener(
		"dragstart",
		(evento) => {
			evento.dataTransfer.setData("id", evento.target.id);
		},
		false
	);
}; //Fin del window onload
