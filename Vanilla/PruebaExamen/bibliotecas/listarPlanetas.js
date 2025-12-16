'use strict';

const mostrarPlanetas = (planetas) => {
	let plantilla = createElement(div);
	for (let i = 0; i < planetas.length; i++) {
		let planeta = planetas[i];
		plantilla.innerHtml += `
        <h1>Nombre: ${planeta.nombre}</h1>
        <p>Clima: ${planeta.clima}</p>
        <p>Diámetro: ${planeta.diametro}</p>
        <img src='${planeta.imagen}'/>
        `;
	}
	return plantilla;
};

export { mostrarPlanetas };
