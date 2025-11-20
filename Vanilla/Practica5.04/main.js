'use strict';

import { crearPiezas, crearBoton, comprobarImg, crearPiezasMedio, cuentaAtras } from './bibliotecas/ejercicio1.js';

window.onload = () => {
	//Hacer temporizador
	const imagenes = [
		'./images/facil/1.png',
		'./images/facil/2.png',
		'./images/facil/3.png',
		'./images/facil/4.png',
		'./images/facil/5.png',
		'./images/facil/6.png',
		'./images/facil/7.png',
		'./images/facil/8.png',
		'./images/facil/9.png',
	];

	const imagenesMedio = [
		'./images/medio/1.png',
		'./images/medio/2.png',
		'./images/medio/3.png',
		'./images/medio/4.png',
		'./images/medio/5.png',
		'./images/medio/6.png',
		'./images/medio/7.png',
		'./images/medio/8.png',
		'./images/medio/9.png',
	];

	crearPiezas(imagenes, 'F');
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
		const imagenArrastrada = document.getElementById(evento.dataTransfer.getData('id'));
		if (evento.target.classList.contains('soltable') || evento.target.id === 'piezas') {
			if (evento.target !== imagenArrastrada) {
				evento.target.appendChild(imagenArrastrada);
			}
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

	let veces = 0;
	let hecho = false; //Nos seguramos de que no repita el if
	panel.addEventListener('drop', (evento) => {
		evento.preventDefault();
		if (evento.target.classList.contains('soltable')) {
			evento.target.appendChild(document.getElementById(evento.dataTransfer.getData('id')));
		}
		veces = comprobarImg(panel.children, veces);
		if (veces === 1 && !hecho) {
			panel.insertAdjacentHTML('beforebegin', "<h2 id='resuelto'>Puzzle resuelto!!!</h2>");
			// Le pasamos la función a ejecutar
			cuentaAtras(document.getElementById('resuelto'), () => {
				crearPiezasMedio(piezas, panel, imagenesMedio);
			});
			hecho = true;
		}
		if (veces === 2 && hecho) {
			panel.insertAdjacentHTML('beforebegin', "<h2 id='resuelto'>Puzzle resuelto!!!</h2>");
		}
	});

	document.getElementsByTagName('button')[0].addEventListener('click', () => {
		// Vaciamos el div con las imágenes para volver a crearlo.
		piezas.innerHTML = '';
		if (!hecho) {
			crearPiezas(imagenes, 'F');
		}
		if (hecho) {
			crearPiezasMedio(piezas, panel, imagenesMedio);
		}
		// Vaciamos el panel para que no tenga imágenes
		let panelImg = panel.children;
		for (let i = 0; i < panelImg.length; i++) {
			panelImg[i].innerHTML = '';
		}
		if (document.getElementById('resuelto')) {
			document.getElementById('resuelto').remove();
		}
		if (veces > 0 && !hecho) veces--;
		if (veces > 1) veces--;
	});
}; //Fin del window onload
