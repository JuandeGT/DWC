import React, { useState, useEffect } from 'react';
import useDiscos from '../hooks/useDiscos';
import './Notificaciones.css';

// Me ha ayudado gemini en este componente porque no me salía y así queda bien :)
const NotificacionIndividual = ({ id, mensaje, tipo, onEliminar }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onEliminar(id);
		}, 3000);

		return () => clearTimeout(timer);
	}, [id, onEliminar, 3000]);

	return (
		<div className={`alerta-item tipo-${tipo}`}>
			<div className="alerta-icono">
				{tipo === 'error' ? (
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<line x1="12" y1="8" x2="12" y2="12"></line>
						<line x1="12" y1="16" x2="12.01" y2="16"></line>
					</svg>
				) : (
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="20 6 9 17 4 12"></polyline>
					</svg>
				)}
			</div>

			<div className="alerta-contenido">
				<div className="alerta-titulo">{tipo === 'error' ? 'Error' : 'Éxito'}</div>
				<div className="alerta-mensaje">{mensaje}</div>
			</div>

			<button onClick={() => onEliminar(id)} className="alerta-cerrar">
				×
			</button>

			<div className="alerta-barra" style={{ animationDuration: `${3000}ms` }} />
		</div>
	);
};

const Notificaciones = () => {
	const { notificacion, limpiarNotificacion } = useDiscos();
	const [lista, setLista] = useState([]);

	useEffect(() => {
		if (notificacion) {
			const { mensaje, tipo } = notificacion;
			const idUnico = Date.now();
			let nuevosItems = [];

			if (Array.isArray(mensaje)) {
				nuevosItems = mensaje.map((msg, idx) => ({ id: idUnico + idx, msg, tipo }));
			} else if (typeof mensaje === 'string' && mensaje.includes('|')) {
				nuevosItems = mensaje.split('|').map((msg, idx) => ({ id: idUnico + idx, msg, tipo }));
			} else {
				nuevosItems = [{ id: idUnico, msg: mensaje, tipo }];
			}

			setLista((prevLista) => [...prevLista, ...nuevosItems]);
			limpiarNotificacion();
		}
	}, [notificacion, limpiarNotificacion]);

	const eliminarAlerta = (idParaBorrar) => {
		setLista((prevLista) => prevLista.filter((item) => item.id !== idParaBorrar));
	};

	return (
		<div className="notificaciones-wrapper">
			{lista.map((item) => (
				<NotificacionIndividual
					key={item.id}
					id={item.id}
					mensaje={item.msg}
					tipo={item.tipo || 'exito'}
					onEliminar={eliminarAlerta}
				/>
			))}
		</div>
	);
};

export default Notificaciones;
