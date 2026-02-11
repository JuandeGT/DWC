import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ListadoProductosAgregar from './ListadoProductosAgregar';
import ListaDetalle from './ListaDetalle';
import useListas from '../hooks/useListas';
import useNotificacion from '../hooks/useNotificacion.js';

const AgregarALista = () => {
	const { id } = useParams();
	const { listas } = useListas();
	const { notificar } = useNotificacion();

	const [lista, setLista] = useState();

	useEffect(() => {
		if (listas.length > 0 && id) {
			const listaActual = listas.find((l) => l.id === id);
			if (listaActual) {
				setLista(listaActual);
			} else {
				notificar('La lista no existe.', 'error');
			}
		}
	}, [id, listas]);

	return (
		<>
			<div className="listado-grid">
				<ListadoProductosAgregar listaActual={lista} />
				<div className="panel-derecha">
					<h2>Lista: {lista ? lista.nombre : 'Cargando nombre...'}</h2>
					<ListaDetalle id={id} listaInfo={lista} />
				</div>
			</div>
		</>
	);
};

export default AgregarALista;
