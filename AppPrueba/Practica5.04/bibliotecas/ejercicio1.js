'use strict';

const crearPiezas = (imagenes, nivel) => {
	const imagenesMezcladas = [...imagenes].sort(() => Math.random() - 0.5);
	const piezas = document.getElementById('piezas');
	for (let i = 0; i < imagenesMezcladas.length; i++) {
		piezas.insertAdjacentHTML('beforeend', `<img id="${imagenesMezcladas[i][15]}img${nivel}" class="arrastable"/>`);
		document.getElementById(`${imagenesMezcladas[i][15]}img${nivel}`).src = imagenesMezcladas[i];
	}
};

const crearPiezasMedio = (piezas, panel, imgMedio) => {
	piezas.innerHTML = '';
	let panelImg = panel.children;
	for (let i = 0; i < panelImg.length; i++) {
		panelImg[i].innerHTML = '';
	}
	if (document.getElementById('resuelto')) {
		document.getElementById('resuelto').remove();
	}
	crearPiezas(imgMedio, 'M');
};

const crearBoton = () => {
	document.getElementById('boton').insertAdjacentHTML('beforeend', '<button>Reiniciar</button>');
};

const comprobarImg = (soltables, veces) => {
	let numAciertos = 0;
	for (let i = 0; i < soltables.length; i++) {
		if (soltables[i].firstChild) {
			if (soltables[i].id === soltables[i].firstChild.id[0]) {
				numAciertos++;
			}
		}
	}
	if (numAciertos === 9) {
		veces++;
		return veces;
	}
	return veces;
};

const cuentaAtras = (sitio, funcion) => {
	let tiempo = 3;
	sitio.insertAdjacentHTML('afterbegin', '<h2 id="cuentaAtras"></h2>');

	const cuentaAtras = document.getElementById('cuentaAtras');
	cuentaAtras.innerHTML = `Siguiente nivel ${tiempo}...`;

	const intervalo = setInterval(() => {
		tiempo--;
		cuentaAtras.innerHTML = `Siguiente nivel ${tiempo}...`;

		if (tiempo <= 0) {
			clearInterval(intervalo);
			funcion();
		}
	}, 1000);
};

export { crearPiezas, crearBoton, comprobarImg, crearPiezasMedio, cuentaAtras };
