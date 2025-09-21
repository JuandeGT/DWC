'use strict';

import { numMes } from './bibliotecas/ejercicio1.js';
import { analisisNumerico } from './bibliotecas/ejercicio2.js';
import { multiplosTres } from './bibliotecas/ejercicio3.js';
import { potencia } from './bibliotecas/ejercicio4.js';
import { media } from './bibliotecas/ejercicio5.js';
import { calculadora } from './bibliotecas/ejercicio6.js';

console.log('Ejercicio 1');
numMes(1);
numMes(12);
numMes(13);

console.log('\nEjercicio 2');
analisisNumerico(7);
analisisNumerico(0);
analisisNumerico(-4);

console.log('\nEjercicio 3');
multiplosTres(10);

console.log('\nEjercicio 4');
potencia(2, 5);
potencia(3, 0);

console.log('\nEjercicio 5');
media(2, 4, 6);
media(5, -1, 3);

console.log('\nEjercicio 6');
calculadora(5, 2, '+');
calculadora(5, 2, '-');
calculadora(5, 2, '*');
calculadora(5, 2, '/');
calculadora(5, 2, '%');
calculadora(5, 2, '^');
