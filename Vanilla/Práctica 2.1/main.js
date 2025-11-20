"use strict";

import { calcularIMC, compararIMC } from "./bibliotecas/ejercicio1.js";
import { puntuacionMedia, mejorMedia } from "./bibliotecas/ejercicio2.js";

//Ejercicio 1
let imcMarcos = calcularIMC(80, 180);
let imcJuan = calcularIMC(60, 168);
let imcMarcosMayorImcJuan = compararIMC(imcMarcos, imcJuan);

console.log(`¿Tiene Marcos un IMC mayor que Juan?: ${imcMarcosMayorImcJuan}`);

//Ejercicio 2
let mediaEquipoJuan = puntuacionMedia(89, 120, 103);
let mediaEquipoMiguel = puntuacionMedia(116, 94, 123);
let mediaEquipoMaria = puntuacionMedia(97, 134, 105);

mejorMedia(mediaEquipoJuan, mediaEquipoMiguel, mediaEquipoMaria);
