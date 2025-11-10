"use strict";

const crearPiezas = (imagenes) => {
	const imagenesMezcladas = [...imagenes].sort(() => Math.random() - 0.5);
	const piezas = document.getElementById("piezas");
	for (let i = 0; i < imagenesMezcladas.length; i++) {
		piezas.insertAdjacentHTML(
			"beforeend",
			`<img id="${imagenesMezcladas[i][15]}img" class="arrastable"/>`
		);
		document.getElementById(`${imagenesMezcladas[i][15]}img`).src =
			imagenesMezcladas[i];
	}
};

const crearBoton = () => {
	document
		.getElementById("boton")
		.insertAdjacentHTML("beforeend", "<button>Reiniciar</button>");
};

const comprobarImg = (soltables) => {
	let numAciertos = 0;
	for (let i = 0; i < soltables.length; i++) {
		if (soltables[i].firstChild) {
			if (soltables[i].id === soltables[i].firstChild.id[0]) {
				numAciertos++;
			}
		}
	}
	return numAciertos === 9 ? true : false;
};

const crearPiezasMedio = (piezas, panel, imgMedio) => {
	piezas.innerHTML = "";
	let panelImg = panel.children;
	for (let i = 0; i < panelImg.length; i++) {
		panelImg[i].innerHTML = "";
	}
	if (document.getElementById("resuelto")) {
		document.getElementById("resuelto").remove();
	}
	crearPiezas(imgMedio);
};

export { crearPiezas, crearBoton, comprobarImg, crearPiezasMedio };
