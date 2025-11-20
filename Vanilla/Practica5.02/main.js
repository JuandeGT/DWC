"use strict";

import { mostrarInfo } from "./bibliotecas/ejercicio1.js";
import { contenidoPestana } from "./bibliotecas/ejercicio2.js";

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
	document.getElementsByClassName("pestana")[0].addEventListener(
		"click",
		(evento) => {
			const pestanas = evento.target.parentNode.children;
			for (let i = 0; i < pestanas.length; i++) {
				//Hacemos el bucle para pasarle a la función como parámetro la posición del tarjet y así saber qué contenido mostrar
				if (pestanas[i].innerHTML === evento.target.innerHTML)
					contenidoPestana(evento, i);
			}
		},
		false
	);
}; // Fin window
