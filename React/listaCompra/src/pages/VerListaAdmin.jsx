import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useListas from '../hooks/useListas.js';
import usePerfil from '../hooks/usePerfil.js';
import Cargando from './Cargando.jsx';
import { formatearPrecio } from '../utils/formatear.js';
import './VerListaAdmin.css'; // <-- Añadida la importación del CSS

const VerListaAdmin = () => {
	const { id } = useParams();
	const navegar = useNavigate();

	const { obtenerProductosLista, productosLista, todasListas, cargando } = useListas();
	const { obtenerNombrePerfil } = usePerfil();

	// Estado para guardar la información de la lista nombre, creador
	const [listaInfo, setListaInfo] = useState(null);
	const [nombreCreador, setNombreCreador] = useState(null);

	useEffect(() => {
		if (id) {
			// Cogemos los productos de nuestra lista
			obtenerProductosLista(id);

			// Cogemos el nombre de la lista
			if (todasListas && todasListas.length > 0) {
				const listaEncontrada = todasListas.find((l) => l.id === id);
				if (listaEncontrada) {
					setListaInfo(listaEncontrada);
					const nombre = obtenerNombrePerfil(listaEncontrada.usuario_id);
					if (nombre) {
						setNombreCreador(nombre);
					}
				}
			}
		}
	}, [id, todasListas]);

	return (
		<>
			{cargando ? (
				<Cargando />
			) : (
				<div className="admin-lista-wrapper">
					<button className="admin-lista-btn-volver" onClick={() => navegar('/listas-compra')}>
						← Volver al panel de administración
					</button>

					<div className="admin-lista-header">
						<h2>Contenido de: {listaInfo ? listaInfo.nombre : 'Cargando...'}</h2>
						<p className="admin-lista-creador">
							👤 Creado por: <strong>{nombreCreador}</strong>
						</p>
					</div>

					<div className="admin-lista-content">
						{!productosLista || productosLista.length === 0 ? (
							<p className="admin-lista-vacia">El usuario aún no ha añadido productos a esta lista.</p>
						) : (
							<div className="admin-lista-items">
								{productosLista.map((item) => (
									<div key={item.id} className="admin-lista-card">
										<div className="admin-lista-card-info">
											<img src={item.productos?.imagen_url} alt={item.productos?.nombre} />
											<div>
												<h3>{item.productos?.nombre}</h3>
												<span>{item.productos?.peso} kg</span>
											</div>
										</div>

										<div className="admin-lista-card-totales">
											<div className="admin-lista-cantidad">x{item.cantidad}</div>
											<div className="admin-lista-precio">
												{item.productos?.precio ? formatearPrecio(item.productos.precio * item.cantidad) : ''}
											</div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default VerListaAdmin;
