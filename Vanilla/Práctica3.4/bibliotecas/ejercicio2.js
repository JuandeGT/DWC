'use strict';

function arrayAleatorio() {
	let array = [];

	for (let i = 0; i < 10; i++) {
		array = [...array, Math.floor(Math.random() * 10) + 1];
	}

	return array;
}

export { arrayAleatorio };
