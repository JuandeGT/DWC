import React from "react";

const ListaDetalle = (props) => {
	const { lista } = props;
	if (!lista) return null;
	return (
		<>
			<div>{lista.nombre}</div>
		</>
	);
};

export default ListaDetalle;
