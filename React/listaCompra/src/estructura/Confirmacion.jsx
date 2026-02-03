import React from "react";
import "./Confirmacion.css";

const Confirmacion = ({ mensaje, onConfirmar, onCancelar }) => {
	return (
		<div className="modal-overlay">
			<div className="modal-contenido">
				<h2 className="modal-titulo">¿Estás seguro?</h2>
				<p>{mensaje}</p>

				<div className="modal-botones">
					<button className="btn-modal btn-cancelar" onClick={onCancelar}>
						Cancelar
					</button>
					<button className="btn-modal btn-confirmar" onClick={onConfirmar}>
						Aceptar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Confirmacion;
