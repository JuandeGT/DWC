import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useNotificacion from "../hooks/useNotificacion.js";
import useListas from "../hooks/useListas.js";
import "./Formulario.css";

const FormularioLista = () => {
	const { id } = useParams();
	const { listas, crearLista, editarLista } = useListas();
	const { notificar } = useNotificacion();

	const navegar = useNavigate();

	const formularioVacio = {
		nombre: "",
	};

	const [formulario, setFormulario] = useState(formularioVacio);

	useEffect(() => {
		if (id && listas.length > 0) {
			const listaEditar = listas.find((l) => l.id === id);
			if (listaEditar) {
				setFormulario(listaEditar);
			} else {
				notificar("La lista no existe.", "error");
				navegar("/lista-compra");
			}
		}
	}, [id, listas]);

	const actualizarForm = (e) => {
		const { name, value } = e.target;
		setFormulario({ ...formulario, [name]: value });
	};

	const guardarForm = (e) => {
		e.preventDefault();

		if (!formulario.nombre) {
			notificar("Rellena el campo nombre, es obligatorio.", "error");
			return;
		}

		if (id) {
			// editar lista
			editarLista(id, formulario.nombre);
			navegar("/listas-compra");
		} else {
			// crear lisa
			crearLista(formulario.nombre);
			navegar("/listas-compra");
		}
	};

	return (
		<>
			<div className="formulario-container">
				<h2>{id ? "Editar Lista" : "Lista Nueva"}</h2>

				<form onSubmit={guardarForm}>
					<label>Nombre de la lista:</label>
					<input
						type="text"
						name="nombre"
						value={formulario.nombre}
						onChange={actualizarForm}
						placeholder="Ej: Lista semanal..."
					/>

					<input
						type="button"
						value="Cancelar"
						onClick={() => navegar("/listas-compra")}
						className="btn-cancelar"
					/>
					<input
						type="submit"
						id="botonGuardar"
						className="btn-guardar"
						value={id ? "Actualizar" : "Crear"}
					/>
				</form>
			</div>
		</>
	);
};

export default FormularioLista;
