'use strict';
const erroresMensaje = {
	nombre: 'El nombre debe tener mínimo 5 caracteres.',
	prioridad: 'Selecciona una prioridad.',
	equipamiento: 'Selecciona un equipamiento.',
	planeta: 'Selecciona un planeta.',
	imagen: 'La imagen debe ser válida.',
};
let errores = [];

const datosFormulario = (form) => {
	return {
		id: crypto.randomUUID().toString(),
		nombre: form[0].value,
		prioridad: prioridadCheked(form),
		equipamiento: equipamientoChecked(form),
		planeta: form[7].value,
		imagen: form[8].value,
	};
};

const prioridadCheked = (form) => {
	for (let i = 1; i < 4; i++) {
		if (form[i].checked) return form[i].value;
	}
	return '';
};

const equipamientoChecked = (form) => {
	let equipamiento = [];
	for (let i = 4; i < 7; i++) {
		if (form[i].checked) equipamiento = [...equipamiento, form[i].value];
	}
	return equipamiento;
};

const validarDatos = (mision) => {
	errores = [];
	if (!validarNombre(mision.nombre)) {
		errores = [...errores, 'nombre'];
	}
	if (mision.prioridad === '') {
		errores = [...errores, 'prioridad'];
	}
	if (mision.equipamiento.length === 0) {
		errores = [...errores, 'equipamiento'];
	}
	if (mision.planeta === '') {
		errores = [...errores, 'planeta'];
	}
	if (errores.length === 0) {
		return true;
	} else {
		return false;
	}
};

const validarNombre = (nom) => {
	return nom.length > 5;
};

const contenedorInfo = (ubi) => {
	ubi.insertAdjacentHTML('beforebegin', '<div class="detalle-oculto" id="info"></div>');
};

const mostrarInfo = (info) => {
	info.innerHTML = '';
	if (errores.length > 0) {
		for (let error of errores) {
			info.insertAdjacentHTML('beforeend', `<p class='error'>Error en el campo ${error}: ${erroresMensaje[error]}</p>`);
		}
	} else {
		info.insertAdjacentHTML('beforeend', '<p class="exito">Mision guardada correctamente.</p>');
	}
};

const vaciarInfo = (info) => {
	info.innerHTML = '';
};

const borrarFormulario = (form) => {
	form.reset();
};

export { datosFormulario, validarDatos, contenedorInfo, mostrarInfo, borrarFormulario, vaciarInfo };
