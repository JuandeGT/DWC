import React, { useRef } from 'react';
import './Pelicula.css';
import Taquilla from './Taquilla';

const Pelicula = (props) => {
	const elencoRef = useRef(null);
	const taquillaRef = useRef(null);

	const ocultar = (ref) => {
		ref.current.classList.toggle('oculto');
	};

	return (
		<div className="pelicula">
			<h2>{props.titulo}</h2>
			<div className="contenido">
				<img src={props.cartela} alt="Cartela" />
				<p>{props.resumen}</p>
			</div>
			<div className="taquilla-area">
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
				<div ref={taquillaRef} className="oculto">
					<Taquilla taquilla={props.taquilla} />
				</div>
				<div ref={elencoRef} className="oculto">
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Pelicula;
