'use strict';

import { crearPiezas, crearBoton } from './bibliotecas/ejercicio1.js';

window.onload = () => {
	//Hacer temporizador
	const imagenes = [
		'./images/1.png',
		'./images/2.png',
		'./images/3.png',
		'./images/4.png',
		'./images/5.png',
		'./images/6.png',
		'./images/7.png',
		'./images/8.png',
		'./images/9.png',
	];

	crearPiezas(imagenes);
	crearBoton();

	const arrastables = document.getElementsByClassName('arrastable');
	for (let i = 0; i < arrastables; i++) {
		arrastables[i].setAttribute('draggable', true);
	}

	const piezas = document.getElementById('piezas');
	piezas.addEventListener(
		'dragstart',
		(evento) => {
			evento.dataTransfer.setData('id', evento.target.id);
		},
		false
	);

	piezas.addEventListener('dragover', (evento) => {
		evento.preventDefault();
	});

	piezas.addEventListener('drop', (evento) => {
		evento.preventDefault();
		if (evento.target.classList.contains('soltable') || evento.target.id === 'piezas') {
			evento.target.appendChild(document.getElementById(evento.dataTransfer.getData('id')));
		}
	});

	const panel = document.getElementById('panel');
	panel.addEventListener(
		'dragstart',
		(evento) => {
			evento.dataTransfer.setData('id', evento.target.id);
		},
		false
	);

	panel.addEventListener('dragover', (evento) => {
		evento.preventDefault();
	});

	panel.addEventListener('drop', (evento) => {
		evento.preventDefault();
		if (evento.target.classList.contains('soltable')) {
			evento.target.appendChild(document.getElementById(evento.dataTransfer.getData('id')));
		}
	});

	document.getElementsByTagName('button')[0].addEventListener('click', () => {
		// Vaciamos el div con las imágenes para volver a crearlo.
		piezas.innerHTML = '';
		crearPiezas(imagenes);
		// Vaciamos el panel para que no tenga imágenes
		let panelImg = panel.children;
		for (let i = 0; i < panelImg.length; i++) {
			panelImg[i].innerHTML = '';
		}
	});
}; //Fin del window onload
