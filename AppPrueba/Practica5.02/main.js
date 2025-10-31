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
			const pestañas = evento.target.parentNode.children;
			for (let i = 0; i < pestañas.length; i++) {
				//Hacemos el bucle para pasarle a la función como parámetro la posición del tarjet y así saber qué contenido mostrar
				if (pestañas[i].innerHTML === evento.target.innerHTML)
					contenidoPestaña(evento, i);
			}
		},
		false
	);
}; // Fin window
