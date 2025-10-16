'use strict';

import { censurarPalabra } from './bibliotecas/ejercicio1.js';
import { crearTabla, cambiarTabla } from './bibliotecas/ejercicio2.js';

setTimeout(() => {
	censurarPalabra();
}, 2000);

crearTabla();

setTimeout(() => {
	cambiarTabla();
}, 2000);
