import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListadoProductosAgregar from "./ListadoProductosAgregar";
import ListaDetalle from "./ListaDetalle";
import useListas from "../hooks/useListas";

const AgregarALista = () => {
	const { id } = useParams();
	const { listas } = useListas();

	const [lista, setLista] = useState();

	useEffect(() => {
		if (listas.length > 0 && id) {
			console.log(listas);
			const listaActual = listas.find((l) => l.id === id);
			setLista(listaActual);
			console.log(lista);
		}
	}, [id]);

	return (
		<>
			<div className="listado-grid">
				<ListadoProductosAgregar />
				<div className="panel-derecha">
					<h2>Lista</h2>
					<ListaDetalle />
				</div>
			</div>
		</>
	);
};

export default AgregarALista;
