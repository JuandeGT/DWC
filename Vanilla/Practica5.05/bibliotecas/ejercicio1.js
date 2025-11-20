'use strict';

const recogerDatos = (formulario, identificador) => {
	return {
		id: identificador,
		nombre: formulario.nombre.value,
		caratula: formulario.caratula.value,
		musico: formulario.musico.value,
		fecha: formulario.fecha.value,
		genero: formulario.genero.value,
		localizacion: formulario.localizacion.value,
		prestado: formulario.prestado.checked === true ? 'si' : 'no',
	};
};

const mostrarDiscos = (divMostrar, discos) => {
	divMostrar.innerHTML = '';
	discos.forEach((e) => {
		divMostrar.insertAdjacentHTML(
			'beforeend',
			`<div id='${e.id}'>
				<h2>${e.nombre}</h2>
            	<p>Carátula(url): ${e.caratula}</p>
            	<p>Grupo o músico: ${e.musico}</p>
            	<p>Año de publicación: ${e.fecha}</p>
            	<p>Género de música: ${e.genero}</p>
            	<p>localización: ${e.localizacion}</p>
            	<p>Prestado: ${e.prestado}</p>
				<img src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"/>
				<hr/>
			</div>`
		);
	});
};

const validarFormulario = (form) => {
	// Comprobamos que estén todos los campos menos la url con sus validaciones
	let errores = [];
	if (!validarNombre(form.nombre.value)) {
		claseError(form.nombre);
		errores = [...errores, 'Error en el campo Nombre'];
	}
	if (!validarMusico(form.musico.value)) {
		claseError(form.musico);
		errores = [...errores, 'Error en el campo Músico o grupo'];
	}
	if (!validarFecha(form.fecha.value)) {
		claseError(form.fecha);
		errores = [...errores, 'Error en el campo Año de nacimiento'];
	}
	if (!validarGenero(form.genero.value)) {
		claseError(form.genero);
		errores = [...errores, 'Error en el campo Género'];
	}
	if (!validarLocalizacion(form.localizacion.value)) {
		claseError(form.localizacion);
		errores = [...errores, 'Error en el campo Localización'];
	}

	return errores.length === 0 ? false : errores;
};

const validarNombre = (nom) => {
	let re = /^.{5,}$/;
	return re.test(nom) && nom !== '';
};

const validarMusico = (musico) => {
	let re = /^.{5,}$/;
	return re.test(musico) && musico !== '';
};

const validarFecha = (fecha) => {
	let re = /^\d{4}$/;
	return re.test(fecha);
};

const validarGenero = (genero) => {
	return genero !== '';
};

const validarLocalizacion = (loc) => {
	let re = /^ES-\d{3}[A-Z]{2}$/;
	return re.test(loc);
};

const mostrarErrores = (errores, divErrores) => {
	errores.forEach((e) => {
		divErrores.insertAdjacentHTML('beforeend', `<p>${e}.</p>`);
	});
};

const claseError = (campo) => {
	campo.classList.add('error');
};

const limpiarErrores = (errores, camposError) => {
	errores.innerHTML = '';

	Array.from(camposError).forEach((campo) => campo.classList.remove('error')); // Si no se transforma puede no ejecutarse bien
};

const cambiarDataList = (discos, datalist) => {
	datalist.innerHTML = '';

	for (let i = 0; i < discos.length; i++) {
		datalist.insertAdjacentHTML('beforeend', `<option value=${discos[i].nombre}></option>`);
	}
};

const buscarDisco = (discos, nombre, divMostrar) => {
	const discosEncontrados = discos.filter((d) => {
		return d.nombre.toLowerCase() === nombre.toLowerCase();
	});
	if (discosEncontrados.length > 0) {
		mostrarDiscos(divMostrar, discosEncontrados);
	} else {
		divMostrar.innerHTML = '<p>No hay discos con ese nombre</p>';
	}
};

const eliminarDisco = (id, discos) => {
	return discos.filter((d) => d.id !== parseInt(id));
};

export {
	recogerDatos,
	mostrarDiscos,
	validarFormulario,
	mostrarErrores,
	limpiarErrores,
	cambiarDataList,
	buscarDisco,
	eliminarDisco,
};
