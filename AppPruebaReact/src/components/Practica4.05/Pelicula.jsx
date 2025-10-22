import React, { useRef } from "react";
import "./Pelicula.css";
import Taquilla from "./Taquilla";

const Pelicula = (props) => {
	const elenco = useRef(null);
	const taquilla = useRef(null);
	return (
		<div className="pelicula">
			<h2>{props.titulo}</h2>
			<p>{props.direccion}</p>
			<img src={props.cartela} alt="Cartela" />
			<p>{props.descripcion}</p>
			<button>Elenco</button>
			<button>Taquilla</button>
			<div>{<Taquilla taquilla={props.taquilla}></Taquilla>}</div>
			<p>{props.children}</p>
		</div>
	);
};

export default Pelicula;
