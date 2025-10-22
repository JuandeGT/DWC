import React, { useRef } from "react";
import "./Pelicula.css";
import Taquilla from "./Taquilla";

const Pelicula = (props) => {
	const elencoRef = useRef(null);
	const taquillaRef = useRef(null);

	const ocultar = (ref) => {
		ref.current.classList.toggle("oculto");
	};

	return (
		<div className="pelicula">
			<h2>{props.titulo}</h2>
			<p>{props.direccion}</p>
			<img src={props.cartela} alt="Cartela" />
			<p>{props.resumen}</p>
			<button
				onClick={() => {
					ocultar(elencoRef);
				}}
			>
				Elenco
			</button>
			<button
				onClick={() => {
					ocultar(taquillaRef);
				}}
			>
				Taquilla
			</button>
			<div ref={elencoRef} className="oculto">
				{props.children}
			</div>
			<div ref={taquillaRef} className="oculto">
				<Taquilla taquilla={props.taquilla} />
			</div>
		</div>
	);
};

export default Pelicula;
