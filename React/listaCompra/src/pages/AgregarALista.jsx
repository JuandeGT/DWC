import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListadoProductosAgregar from "./ListadoProductosAgregar";
import ListaDetalle from "./ListaDetalle";
import useListas from "../hooks/useListas";

const AgregarALista = () => {
	const { id } = useParams();
	const { listas, seleccionarListaId } = useListas();

	const [lista, setLista] = useState();

	useEffect(() => {
		if (listas.length > 0 && id) {
			const listaActual = listas.find((l) => l.id === id);
			if (listaActual) {
				setLista(listaActual);
				seleccionarListaId(id);
			} else {
				notificar("La lista no existe.", "error");
			}
		}
	}, [id, listas]);

	return (
		<>
			<div className="listado-grid">
				<ListadoProductosAgregar />
				<div className="panel-derecha">
					<h2>Lista</h2>
					<ListaDetalle lista={lista} />
				</div>
			</div>
		</>
	);
};

export default AgregarALista;
