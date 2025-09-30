'use strict';

import { arrayAleatorio } from './bibliotecas/ejercicio2.js';
import {
	usuarios,
	insertarUsuario,
	mayoresEdad,
	usuariosYahoo,
	usuariosClaroMayorEspanya,
	usuariosIncompletos,
	usuariosApellidos,
	anadirCodigoDireccion,
} from './bibliotecas/ejercicio3.js';

//Ejercicio 1
const nombres = ['Juande', 'Rubén', 'Carlos', 'Alvaro', 'Irene'];

nombres.forEach((valor) => console.log(valor.toUpperCase()));

const nombresReves = [...nombres].sort().reverse(); //No funciona el sort si ponemos acentos, por eso Álvaro no lo tiene (aunque esté mal gramáticamente)
console.log(`Nombres al revés: ${nombresReves}`);

const arrayJSon = nombres.map((v, i, a) => ({
	id: i,
	nombre: v,
}));

arrayJSon.forEach((v) => console.log(`Id: ${v.id}, nombre: ${v.nombre}`));

//Ejercicio 2
const array1 = arrayAleatorio();
const array2 = arrayAleatorio();
const array3 = arrayAleatorio();

/* console.log(array1);
console.log(array2);
console.log(array3); */

const arrayMayorCinco = [...array1, ...array2, ...array3].filter((n) => n > 5);
console.log('Números mayores que 5:');
console.log(arrayMayorCinco);
//arrayMayorCinco.forEach((v) => console.log(v));

//Ejercicio 3

console.log('\n1) Insertar nuevo usuario:');
console.log(
	insertarUsuario(
		{
			nombre: 'Pepe',
			preferencias: { tema: 'oscuro', idioma: 'español', edad: 40 },
			contacto: {
				direccion: { calle: 'Calle Falsa 123', localidad: 'Madrid', pais: 'España' },
				correoelectronico: 'pepe@yahoo.com',
				telefono: '987654321',
			},
		},
		usuarios
	)
);

console.log('\n2) Usuarios mayores de edad:');
console.log(mayoresEdad(usuarios));

console.log('\n3) Usuarios Yahoo:');
console.log(usuariosYahoo(usuarios));

console.log('\n4) Usuarios tema claro, mayores y de España:');
console.log(usuariosClaroMayorEspanya(usuarios));

console.log('\n5) Usuarios con datos incompletos:');
console.log(usuariosIncompletos(usuarios));

console.log('\n6) Usuarios con apellidos:');
console.log(usuariosApellidos(usuarios));

console.log('\n7) Usuarios con código:');
console.log(anadirCodigoDireccion(usuarios));
