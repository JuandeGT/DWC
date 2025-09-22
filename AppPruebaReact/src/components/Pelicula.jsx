import React from "react";

const Pelicula = (props) => {
	return (
		<>
			<h2>{props.titulo}</h2>
			<p>{props.direccion}</p>
			<image>{props.cartela}</image>
			<div>{props.childrem}</div>
		</>
	);
};

export default Pelicula;
