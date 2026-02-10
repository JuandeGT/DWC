import React from "react";
import { useNavigate } from "react-router-dom";
import useListas from "../hooks/useListas.js";
import useSesion from "../hooks/useSesion.js";
import Cargando from "./Cargando.jsx";
import Lista from "./Lista.jsx";
import "./ListasCompra.css";

const ListasCompra = () => {
	const { listas, cargando } = useListas();
	const { sesionIniciada } = useSesion();

	const navegar = useNavigate();

	return (
		<>
			<div className="listado-listas-grid">
				<div className="panel-lista">
					<div className="cabecera-lista-compra">
						<h2>Listas Compra</h2>
						{sesionIniciada && (
							<button
								className="btn-crear-lista"
								onClick={() => navegar("/crear-lista")}
							>
								<img
									src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
									alt="Crear"
								/>
							</button>
						)}
					</div>
					{cargando ? (
						<Cargando />
					) : (
						<div className="contenedor-listas-vertical">
							{!listas || listas.length === 0 ? (
								<p>No hay listas disponibles.</p>
							) : (
								listas.map((l) => <Lista key={l.id} lista={l} />)
							)}
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ListasCompra;
