import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProductos from "../hooks/useProductos.js";
import useSesion from "../hooks/useSesion.js";
import useListas from "../hooks/useListas.js";
import MostrarProducto from "./MostrarProducto.jsx";
import Cargando from "./Cargando.jsx";
import FiltrarProducto from "./FiltrarProducto.jsx";
import { formatearPrecio } from "../utils/formatear.js";
import "./ListadoProductosAgregar.css";

const ListadoProductosAgregar = ({ listaActual }) => {
	const { productosListado, cargando } = useProductos();
	const { sesionIniciada, soyAdmin } = useSesion();

	const { agregarArticuloLista } = useListas();

	const navegar = useNavigate();

	const [cantidades, setCantidades] = useState({});

	// Ayuda de gemini
	const modificarCantidad = (id_producto, cantidad) => {
		setCantidades((prev) => {
			const actual = prev[id_producto] || 1;
			const nueva = actual + cantidad;
			return { ...prev, [id_producto]: nueva < 1 ? 1 : nueva };
		});
	};

	const agregar = (id_producto) => {
		if (listaActual) {
			const cantidad = cantidades[id_producto] || 1;

			agregarArticuloLista(listaActual.id, id_producto, cantidad);
			// Seteamos las cantidades a 1
			setCantidades((prev) => ({ ...prev, [id_producto]: 1 }));
		}
	};

	const calcularPrecio = () => {
		let precioMedio = 0;
		productosListado.forEach(
			(producto) => (precioMedio += Number(producto.precio)),
		);
		return precioMedio / productosListado.length || 0;
	};
	return (
		<>
			<div className="panel-izquierda">
				<div className="cabecera-lista">
					<h2>Lista Productos</h2>
					{soyAdmin && (
						<button
							className="btn-crear-nuevo"
							onClick={() => navegar("/crear-producto")}
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
					<>
						{sesionIniciada && <FiltrarProducto />}
						<div className="lista-items">
							{!productosListado || productosListado.length === 0 ? (
								<p>No hay productos disponibles.</p>
							) : (
								productosListado.map((p) => (
									<div key={p.id} className="producto-card">
										<div className="producto-imagen">
											<img
												src={p.imagen_url ? p.imagen_url : "https://"}
												alt={p.nombre}
											/>
										</div>

										<div className="producto-info">
											<h3>{p.nombre}</h3>
											<span className="peso">{p.peso} kg</span>

											<div className="card-footer-agregar">
												<span className="precio">
													{formatearPrecio(p.precio)}
												</span>

												<div style={{ display: "flex", alignItems: "center" }}>
													{/* Selector - 1 + */}
													<div className="selector-cantidad">
														<button
															className="btn-cantidad"
															onClick={() => modificarCantidad(p.id, -1)}
														>
															-
														</button>

														<div className="input-cantidad-visual">
															{cantidades[p.id] || 1}
														</div>

														<button
															className="btn-cantidad"
															onClick={() => modificarCantidad(p.id, 1)}
														>
															+
														</button>
													</div>

													{/* Botón Añadir */}
													<button
														className="btn-add-carrito"
														title="Añadir a la lista"
														onClick={() => agregar(p.id)}
													>
														{/* Icono de Más (+) */}
														<img
															src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png"
															alt="+"
														/>
													</button>
												</div>
											</div>
										</div>
									</div>
								))
							)}
						</div>
						<div className="resumen-box">
							<div className="dato-resumen">
								<span>Cantidad:</span>
								<strong>{productosListado.length} prods.</strong>
							</div>
							<div className="dato-resumen">
								<span>Precio Medio:</span>
								<strong>{formatearPrecio(calcularPrecio())}</strong>
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default ListadoProductosAgregar;
