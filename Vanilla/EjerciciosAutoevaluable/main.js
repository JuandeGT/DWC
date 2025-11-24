"use strict";

window.onload = () => {
	// Ejercicio Promesa (ejercicio1 -> Práctica 6.01)

	const promesa = new Promise((resolver, rechazar) => {
		setTimeout(() => {
			let num = Math.floor(Math.random() * 101);

			if (num % 2 === 0) {
				resolver(num);
			} else {
				rechazar(new Error("El número es impar."));
			}
		}, 2000);
	});

	promesa
		.then((datos) => {
			console.log(datos);
		})
		.catch((error) => {
			console.log(error.message);
		})
		.finally(() => {
			console.log("Proceso asincrono terminado");
		});
}; //Window onload terminado
