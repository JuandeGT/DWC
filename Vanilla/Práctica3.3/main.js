'use strict';

import { curso } from './bibliotecas/ejercicio1.js';
import { mostrar } from './bibliotecas/ejercicio2.js';
import { discente } from './bibliotecas/ejercicio3.js';
import { imprimirObjeto } from './bibliotecas/ejercicio5.js';

// Ejercicio 1.
let primerCurso = curso('DAW', 2, ['Juande', 'Rubén']);

// Ejercicio 2.
mostrar(primerCurso);

// Ejercicio 3.
let discente1 = discente(10816196, 'Juan', 'Gómez Tenza', ['Videojugos', 'Deportes', 'Animales'], {
	primeraNota: 7,
	segundaNota: 10,
	terceraNota: 3,
});
console.log(discente1.calcularMedia().toLocaleString('es-ES'));
// Si fuese dinero sería: .toLocaleString("es-ES", { style: "currency", currency: "EUR" })
console.log(discente1.imprimirAficiones());
console.log(discente1.imprimirInforme());

//Ejercicio 4
primerCurso.matricular(discente1);

//Ejercicio 5
imprimirObjeto(discente1);
