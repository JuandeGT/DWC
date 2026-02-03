import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProductos from "../hooks/useProductos.js";
import useNotificacion from "../hooks/useNotificacion.js";
import "./FormularioProducto.css";

const FormularioProducto = () => {
	const { id } = useParams(); // Si hay un ID en la URL, estamos editando, sino estamos creando
	const { productos, crearProducto, editarProducto } = useProductos();
	const { notificar } = useNotificacion();

	const navegar = useNavigate();

	const formularioVacio = {
		nombre: "",
		precio: "",
		peso: "",
		imagen_url: "",
		descripcion: "",
	};

	const [formulario, setFormulario] = useState(formularioVacio);

	useEffect(() => {
		if (id && productos.length > 0) {
			const productoEditar = productos.find((p) => p.id === id);
			if (productoEditar) {
				setFormulario(productoEditar);
			} else {
				notificar("El producto no existe.", "error");
				navegar("/listado");
			}
		}
	}, [id, productos]);

	const actualizarForm = (e) => {
		const { name, value } = e.target;
		setFormulario({ ...formulario, [name]: value });
	};

	const guardarForm = (e) => {
		e.preventDefault();

		if (!formulario.nombre || !formulario.precio || !formulario.peso) {
			notificar(
				"Rellena los campos obligatorios (nombre, precio, peso).",
				"error",
			);
			return;
		}

		if (id) {
			// Editar
			editarProducto(id, formulario);
			navegar("/listado");
		} else {
			// Crear
			crearProducto(formulario);
			navegar("/listado");
		}
	};

	return (
		<div className="formulario-container">
			<h2>{id ? "Editar Producto" : "Nuevo Producto"}</h2>

			<form onSubmit={guardarForm}>
				<label>Nombre del producto:</label>
				<input
					type="text"
					name="nombre"
					value={formulario.nombre}
					onChange={actualizarForm}
					placeholder="Ej: Proteína Whey..."
				/>
				<label>Precio (€):</label>
				<input
					type="number"
					name="precio"
					value={formulario.precio}
					onChange={actualizarForm}
					step="0.01"
					placeholder="0.00"
				/>
				<label>Peso (kg):</label>
				<input
					type="number"
					name="peso"
					value={formulario.peso}
					onChange={actualizarForm}
					step="0.01"
					placeholder="0.00"
				/>

				<label>URL de la imagen:</label>
				<input
					type="text"
					name="imagen_url"
					value={formulario.imagen_url}
					onChange={actualizarForm}
					placeholder="https://..."
				/>
				{formulario.imagen_url && (
					<div className="previsualizacion">
						<img
							src={formulario.imagen_url}
							alt={"La imágen no se puede previsualizar."}
						/>
					</div>
				)}

				<label>Descripción:</label>
				<textarea
					name="descripcion"
					value={formulario.descripcion}
					onChange={actualizarForm}
					placeholder="Detalles del producto..."
				/>

				<input
					type="button"
					value="Cancelar"
					onClick={() => navegar("/listado")}
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
	);
};

export default FormularioProducto;
