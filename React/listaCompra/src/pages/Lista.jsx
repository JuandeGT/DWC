import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Confirmacion from '../estructura/Confirmacion.jsx';
import useListas from '../hooks/useListas.js';
import usePerfil from '../hooks/usePerfil.js';

const Lista = ({ lista, vistaAdmin }) => {
	const { eliminarLista } = useListas();
	const { obtenerNombrePerfil } = usePerfil();

	const navegar = useNavigate();

	const [confirmar, setConfirmar] = useState(false);
	const [nombreCreador, setNombreCreador] = useState('Cargando...'); // Ponemos el cargando para que el usuario sepa que el valor cambiará

	const editar = (evento) => {
		if (evento.target.className === 'icono-lista-editar') {
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
		if (e.target.parentNode.className !== 'acciones-lista') {
			if (vistaAdmin) {
				navegar(`/ver-lista/${lista.id}`);
			} else {
				navegar(`/agregar-productos/${lista.id}`);
			}
		}
	};

	useEffect(() => {
		if (vistaAdmin && lista.usuario_id) {
			obtenerNombrePerfil(lista.usuario_id);
			const nombre = obtenerNombrePerfil(lista.usuario_id);
			if (nombre) {
				setNombreCreador(nombre);
			} else {
				setNombreCreador('Usuario desconocido');
			}
		}
	}, [lista, vistaAdmin]);

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
					{vistaAdmin && <p className="creador-lista">👤 Creador: {nombreCreador}</p>}
				</div>
				{!vistaAdmin && (
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
				)}
			</div>
		</>
	);
};

export default Lista;
