import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useListas from "../hooks/useListas.js";
import useSesion from "../hooks/useSesion.js";
import Cargando from "./Cargando.jsx";
import Lista from "./Lista.jsx";
import "./ListasCompra.css";

const ListasCompra = () => {
	const { listas, todasListas, cargando } = useListas();
	const { sesionIniciada, administrador } = useSesion();

	const [verTodas, setVerTodas] = useState(false);

	const navegar = useNavigate();

	return (
		<>
			{verTodas ? (
				<>
					<div className="listado-listas-grid">
						<div className="panel-lista">
							<div className="cabecera-lista-compra">
								<h2>Listas Compra</h2>
								{administrador && (
									<>
										<button
											className="btn-cambiar-listas"
											onClick={() => setVerTodas(false)}
										>
											Ver mis listas
										</button>
									</>
								)}
							</div>
							{cargando ? (
								<Cargando />
							) : (
								<div className="contenedor-listas-vertical">
									{!todasListas || todasListas.length === 0 ? (
										<p>No hay listas disponibles.</p>
									) : (
										todasListas.map((l) => <Lista key={l.id} lista={l} />)
									)}
								</div>
							)}
						</div>
					</div>
				</>
			) : (
				<>
					<div className="listado-listas-grid">
						<div className="panel-lista">
							<div className="cabecera-lista-compra">
								<h2>Listas Compra</h2>
								{administrador && (
									<>
										<button
											className="btn-cambiar-listas"
											onClick={() => setVerTodas(true)}
										>
											Ver todas listas
										</button>
									</>
								)}
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
			)}
		</>
	);
};

export default ListasCompra;
