'use strict';

const crearPiezas = (imagenes) => {
	const imagenesMezcladas = [...imagenes].sort(() => Math.random() - 0.5);
	const piezas = document.getElementById('piezas');
	for (let i = 0; i < imagenesMezcladas.length; i++) {
		piezas.insertAdjacentHTML('beforeend', `<img id="${i + 1}" class="arrastable"/>`);
		document.getElementById(`${i + 1}`).src = imagenesMezcladas[i];
	}
};

const crearBoton = () => {
	document.getElementById('boton').insertAdjacentHTML('beforeend', '<button>Reiniciar</button>');
};

export { crearPiezas, crearBoton };
