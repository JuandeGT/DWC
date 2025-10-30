"use strict";

import { mostrarInfo } from "./bibliotecas/ejercicio1.js";
import { contenidoPestaña } from "./bibliotecas/ejercicio2.js";

window.onload = () => {
	// Ejercicio 1
	document.getElementsByClassName("acordeon")[0].addEventListener(
		"click",
		(evento) => {
			if (evento.target.classList.contains("impar")) mostrarInfo(evento);
		},
		false
	);

	// Ejercicio 2
	document.getElementsByClassName("pestaña")[0].addEventListener(
		"click",
		(evento) => {
			if (evento.target.innerHTML === "Pestaña1") contenidoPestaña(evento, 0);
			if (evento.target.innerHTML === "Pestaña2") contenidoPestaña(evento, 1);
			if (evento.target.innerHTML === "Pestaña3") contenidoPestaña(evento, 2);
		},
		false
	);
}; // Fin window
