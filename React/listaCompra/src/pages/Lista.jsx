import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confirmacion from "../estructura/Confirmacion.jsx";
import useListas from "../hooks/useListas.js";

const Lista = (props) => {
	const { lista } = props;
	const { eliminarLista } = useListas();

	const navegar = useNavigate();

	const [confirmar, setConfirmar] = useState(false);

	const editar = (evento) => {
		if (evento.target.className === "icono-lista-editar") {
			navegar(`/editar-lista/${lista.id}`);
		}
	};

	const borrar = () => {
		setConfirmar(true);
	};

	const confirmarBorrado = () => {
		eliminarLista(lista.id);
		setConfirmar(false);
	};

	const cancelarBorrado = () => {
		setConfirmar(false);
	};

	const listaAgregar = (e) => {
		if (e.target.parentNode.className !== "acciones-lista") {
			navegar(`/agregar-productos/${lista.id}`);
		}
	};

	return (
		<>
			{confirmar && (
				<Confirmacion
					mensaje={`¿Estás seguro de que quieres eliminar "${lista.nombre}"?`}
					onConfirmar={confirmarBorrado}
					onCancelar={cancelarBorrado}
				/>
			)}
			<div className="lista-compra-card" onClick={listaAgregar}>
				<div className="lista-compra-info">
					<h3>{lista.nombre}</h3>
				</div>

				<div className="acciones-lista">
					<img
						className="icono-lista-editar"
						src="https://cdn-icons-png.flaticon.com/512/5996/5996831.png"
						alt="Editar"
						title="Editar"
						onClick={editar}
					/>
					<img
						className="icono-lista-borrar"
						src="https://cdn-icons-png.freepik.com/512/8568/8568248.png"
						alt="Borrar"
						title="Borrar"
						onClick={borrar}
					/>
				</div>
			</div>
		</>
	);
};

export default Lista;
