import React, { useState, useEffect } from "react";
import usePerfil from "../hooks/usePerfil.js";
import useNotificacion from "../hooks/useNotificacion.js";
import Cargando from "./Cargando.jsx";
import "./Perfil.css";

const Perfil = () => {
	const { perfil, editarPerfil } = usePerfil();
	const { notificar } = useNotificacion();

	const [editando, setEditando] = useState(false);

	const formularioVacio = {
		nombre: "",
		descripcion: "",
		avatar: "",
	};

	const [formulario, setFormulario] = useState(formularioVacio);

	useEffect(() => {
		if (perfil) {
			setFormulario({
				nombre: perfil.nombre || "",
				descripcion: perfil.descripcion || "",
				avatar: perfil.avatar || "",
			});
		}
	}, [perfil]);

	const actualizarForm = (e) => {
		const { name, value } = e.target;
		setFormulario({ ...formulario, [name]: value });
	};

	// Guardar cambios (Update)
	const guardarForm = async (e) => {
		e.preventDefault();

		if (!formulario.nombre) {
			notificar("Rellena el campos obligatorio (nombre).", "error");
			return;
		}
		if (!formulario.avatar) {
			setFormulario({
				...formulario,
				avatar:
					"https://t4.ftcdn.net/jpg/11/68/50/57/360_F_1168505794_IBCEiafsIrHFJ09e65P2vh5115C1XI7e.jpg",
			});
		}

		editarPerfil(formulario);
		setEditando(false);
	};

	if (!perfil) return <Cargando />;

	return (
		<div className="perfil-container">
			<div className="perfil-card">
				<div className="perfil-header">
					<img
						src={
							formulario.avatar ||
							"https://t4.ftcdn.net/jpg/11/68/50/57/360_F_1168505794_IBCEiafsIrHFJ09e65P2vh5115C1XI7e.jpg"
						}
						alt="Avatar usuario"
						className="perfil-avatar-img"
					/>
					{!editando && <h2>{perfil.nombre || "Usuario sin nombre"}</h2>}
				</div>

				<div className="perfil-body">
					{editando ? (
						<form onSubmit={guardarForm} className="form-perfil">
							<label>Nombre:</label>
							<input
								type="text"
								name="nombre"
								value={formulario.nombre}
								onChange={actualizarForm}
								placeholder="Ej: UsuarioFEO..."
							/>

							<label>URL del Avatar:</label>
							<input
								type="text"
								name="avatar"
								value={formulario.avatar}
								onChange={actualizarForm}
								placeholder="https://..."
							/>

							<label>Descripción:</label>
							<textarea
								name="descripcion"
								value={formulario.descripcion}
								onChange={actualizarForm}
								placeholder="Detalles del perfil..."
							/>

							<input
								type="button"
								value="Cancelar"
								onClick={() => setEditando(false)}
								className="btn-cancelar"
							/>
							<input
								type="submit"
								id="botonGuardar"
								className="btn-guardar"
								value="Guardar"
							/>
						</form>
					) : (
						<>
							<div className="perfil-dato">
								<strong>Descripción:</strong>
								<p>{perfil.descripcion || "Sin descripción..."}</p>
							</div>

							<div className="botones-accion">
								<button
									className="btn-editar"
									onClick={() => setEditando(true)}
								>
									✏️ Editar Perfil
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Perfil;
