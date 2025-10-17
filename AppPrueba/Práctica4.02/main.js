"use strict";

import { censurarPalabra } from "./bibliotecas/ejercicio1.js";
import { crearTabla, cambiarTabla } from "./bibliotecas/ejercicio2.js";
import { carruselImg } from "./bibliotecas/ejercicio4.js";

/* setTimeout(() => {
	censurarPalabra();
}, 2000);

crearTabla();

setTimeout(() => {
	cambiarTabla();
}, 2000); */

//Separar las dos funciones para que no cree todo el rato otro div y otra img
let num = 0;
carruselImg(num);
num++;
setInterval(() => {
	carruselImg(num);
	num++;
}, 2000);
