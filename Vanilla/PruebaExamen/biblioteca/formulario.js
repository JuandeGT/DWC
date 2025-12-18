'use strict';
let mensajesError = {
	name: 'El nombre debe tener 5 o más caracteres.',
	climate: 'Debes seleccionar un clima.',
	diameter: 'El diámetro tiene que ser al menos de 1000.',
	imagen: 'Debe ser una url válida.',
	elementos: 'Debes seleccionar al menos un elemento.',
	lunas: 'Debes seleccionar una opción.',
};
let errores = [];

const patrones = {
	name: /.{5,}/,
	diameter: /^\d{4,}$/,
	imagen: /^https?:\/\//,
};

const obtenerDatosFormulario = (form) => {
	return {
		name: form[0].value,
		climate: form[1].value,
		diameter: form[2].value,
		imagen: form[3].value,
		elementos: obtenerElementos(form.elementos),
		lunas: obtenerLunas(form.lunas),
		habitable: form.habitable.checked,
	};
};

const obtenerElementos = (elementos) => {
	let elementosSeleccionados = [];
	for (let elemento of elementos) {
		if (elemento.checked) {
			elementosSeleccionados = [...elementosSeleccionados, elemento.value];
		}
	}
	return elementosSeleccionados;
};

const obtenerLunas = (lunas) => {
	for (let luna of lunas) {
		if (luna.checked) {
			return luna.value;
		}
	}
	return '';
};

const validarDatos = (planeta) => {
	errores = [];
	if (!validarName(planeta.name)) {
		errores = [...errores, 'name'];
	}
	if (planeta.climate === '') {
		errores = [...errores, 'climate'];
	}
	if (!validarDiametro(planeta.diameter)) {
		errores = [...errores, 'diameter'];
	}
	if (!validarImagen(planeta.imagen)) {
		errores = [...errores, 'imagen'];
	}
	if (planeta.elementos.length === 0) {
		errores = [...errores, 'elementos'];
	}
	if (planeta.lunas === '') {
		errores = [...errores, 'lunas'];
	}
	if (errores.length > 0) {
		return false;
	}
	return true;
};

const validarName = (nom) => {
	return patrones.name.test(nom) && nom !== '';
};

const validarDiametro = (dia) => {
	return patrones.diameter.test(dia) && dia !== '';
};

const validarImagen = (img) => {
	return patrones.imagen.test(img) || img === '';
};

const divInformacion = (formulario) => {
	formulario.insertAdjacentHTML('beforeend', '<div id="informacion" class="ocultar"><br/></br></br></div>');
};

const mostrarInfo = (divInfo, form) => {
	divInfo.classList.remove('ocultar');
	if (errores.length > 0) {
		divInfo.classList.add('mensajeError', 'error');
		divInfo.style = '';
		divInfo.innerHTML = '';
		for (let error of errores) {
			divInfo.insertAdjacentHTML('beforeend', `<p>Error en el campo ${error}: ${mensajesError[error]}.</p>`);
		}
	} else {
		divInfo.classList.remove('mensajeError', 'error');
		divInfo.style = 'background-color: lightgreen; border: 2px solid green; margin-top: 10px; padding-left: 5px;';
		divInfo.innerHTML = '<p>Planeta registrado con éxito.</p>';
		limpiarFormulario(form);
		setTimeout(() => {
			limpiarInfo(divInfo);
		}, 2000);
	}
};

const limpiarInfo = (divInfo) => {
	divInfo.classList.add('ocultar');
	divInfo.style = '';
	divInfo.innerHTML = '';
};

const limpiarFormulario = (form) => {
	form.reset();
};

export { obtenerDatosFormulario, validarDatos, divInformacion, mostrarInfo, limpiarInfo };
