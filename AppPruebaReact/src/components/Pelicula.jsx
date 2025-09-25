import React from 'react';
import './Pelicula.css';

const Pelicula = (props) => {
	return (
		<div className="pelicula">
			<h2>{props.titulo}</h2>
			<p>{props.direccion}</p>
			<img src={props.cartela} alt="Cartela" />
			<p>{props.children}</p>
		</div>
	);
};

export default Pelicula;
