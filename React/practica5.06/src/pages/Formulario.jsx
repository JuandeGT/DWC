import React, { useState } from 'react';
import './Formulario.css';
import Errores from './Errores.jsx';

const Formulario = (props) => {
	const { discos, setDiscos } = props;

	const formularioVacio = {
		nombre: '',
		caratula: '',
		musico: '',
		fecha: '',
		genero: '',
		localizacion: '',
		prestado: false,
	};

	const [formulario, setFormulario] = useState(formularioVacio);

	const [errores, setErrores] = useState([]);

	const actualizarForm = (evento) => {
		if (evento.target.name === 'prestado') {
			setFormulario({ ...formulario, prestado: evento.target.checked });
		} else {
			campoError(evento.target) ? evento.target.classList.remove('error') : evento.target.classList.add('error');
			setFormulario({ ...formulario, [evento.target.name]: evento.target.value });
		}
	};

	const campoError = (campo) => {
		let correcto = true;
		if (campo) {
			let nombre = campo.name;
			switch (nombre) {
				case 'nombre':
					correcto = validarNombre(campo.value);
					break;
				case 'musico':
					correcto = validarMusico(campo.value);
					break;
				case 'fecha':
					correcto = validarFecha(campo.value);
					break;
				case 'genero':
					correcto = validarGenero(campo.value);
					break;
				case 'localizacion':
					correcto = validarLocalizacion(campo.value);
					break;
				case 'caratula':
					correcto = true;
					break;
				default:
					correcto = false;
					break;
			}
		}
		return correcto;
	};

	const guardarForm = () => {
		let erroresVal = validarFormulario();
		if (erroresVal.length > 0) {
			setErrores(erroresVal);
		} else {
			let disco = recogerDatos(formulario);
			setDiscos([...discos, disco]);
			setFormulario(formularioVacio);
			setErrores([]);
			// mostrar mensaje disco guardado durante un tiempo
		}
	};

	const validarFormulario = () => {
		let erroresAux = [];
		if (!validarNombre(formulario.nombre)) {
			erroresAux = [...erroresAux, 'Error en el campo Nombre'];
		}
		if (!validarMusico(formulario.musico)) {
			erroresAux = [...erroresAux, 'Error en el campo Músico o grupo'];
		}
		if (!validarFecha(formulario.fecha)) {
			erroresAux = [...erroresAux, 'Error en el campo Año de nacimiento'];
		}
		if (!validarGenero(formulario.genero)) {
			erroresAux = [...erroresAux, 'Error en el campo Género'];
		}
		if (!validarLocalizacion(formulario.localizacion)) {
			erroresAux = [...erroresAux, 'Error en el campo Localización'];
		}
		return erroresAux;
	};

	const validarNombre = (nom) => {
		let re = /^.{5,}$/;
		return re.test(nom);
	};

	const validarMusico = (musico) => {
		let re = /^.{5,}$/;
		return re.test(musico);
	};

	const validarFecha = (fecha) => {
		let re = /^\d{4}$/;
		return re.test(fecha) || fecha === '';
	};

	const validarGenero = (genero) => {
		return genero !== '';
	};

	const validarLocalizacion = (loc) => {
		let re = /^ES-\d{3}[A-Z]{2}$/;
		return re.test(loc) || loc === '';
	};

	const recogerDatos = (formulario) => {
		return {
			id: crypto.randomUUID(),
			nombre: formulario.nombre,
			caratula: formulario.caratula,
			musico: formulario.musico,
			fecha: formulario.fecha,
			genero: formulario.genero,
			localizacion: formulario.localizacion,
			prestado: formulario.prestado,
		};
	};

	return (
		<>
			<div id="divForm">
				<form id="formulario" name="formulario">
					<h3>Formulario:</h3>
					<label htmlFor="nombre">Nombre del disco:</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						value={formulario.nombre}
						placeholder="Nombre..."
						required
						onChange={actualizarForm}
					/>
					<br />
					<label htmlFor="caratula">Carátula del disco:</label>
					<input
						type="url"
						id="caratula"
						name="caratula"
						value={formulario.caratula}
						placeholder="URL de la carátula..."
						onChange={actualizarForm}
					/>
					<br />
					<label htmlFor="musico">Grupo de música o músico:</label>
					<input
						type="text"
						id="musico"
						name="musico"
						value={formulario.musico}
						placeholder="Crupo o músico..."
						onChange={actualizarForm}
					/>
					<br />
					<label htmlFor="fecha">Año de publicación:</label>
					<input
						type="number"
						id="fecha"
						name="fecha"
						value={formulario.fecha}
						placeholder="Fecha publicación..."
						onChange={actualizarForm}
					/>
					<br />
					<label htmlFor="genero">
						<strong>Género:</strong>
					</label>
					<select id="genero" name="genero" value={formulario.genero} onChange={actualizarForm}>
						<option value="">Selecciona el género</option>
						<option value="rock">Rock</option>
						<option value="pop">Pop</option>
						<option value="clasica">Clasica</option>
						<option value="jazz">Jazz</option>
						<option value="electronica">Electronica</option>
					</select>
					<br />
					<label htmlFor="localizacion">Localización del disco:</label>
					<input
						type="text"
						id="localizacion"
						name="localizacion"
						value={formulario.localizacion}
						placeholder="Localizacion del disco..."
						onChange={actualizarForm}
					/>
					<br />
					<label htmlFor="prestado">Prestado:</label>
					<input
						type="checkbox"
						id="prestado"
						name="prestado"
						checked={formulario.prestado}
						onChange={actualizarForm}
					/>
					<br />
					<input
						type="button"
						id="botonGuardar"
						value="Guardar"
						onClick={() => {
							guardarForm();
						}}
					/>
				</form>
				<div className="errores">{<Errores errores={errores} />}</div>
			</div>
		</>
	);
};

export default Formulario;
