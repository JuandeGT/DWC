import React, { useState } from 'react';
import './Listado.css';

const Listado = () => {
	const valorInicial = [];

	const [listado, setListado] = useState(valorInicial);

	const generarNumero = () => {
		let numAleatorio = Math.floor(Math.random() * 100) + 1; //Crear un número aleatorio entre el 1 y 100 incluidos
		if (listado.includes(numAleatorio)) {
			generarNumero();
		} else {
			setListado([...listado, numAleatorio]);
		}
	};

	const eliminarListado = () => {
		setListado([]);
	};

	return (
		<>
			<div className="listado_container">
				<h1>Listado números</h1>
				<ul>
					<ul>
						<li>
							<button
								onClick={() => {
									generarNumero();
								}}
							>
								Generar
							</button>
						</li>
						<li>
							<button
								onClick={() => {
									eliminarListado();
								}}
							>
								Eliminar
							</button>
						</li>
					</ul>
				</ul>
			</div>
			<div className="numeros_container">
				{listado.map((list, indice) => {
					// Uso el randomUUID como key para que no salte la davertencia por consola.
					return (
						<p id={indice} key={crypto.randomUUID()}>
							{list}
						</p>
					);
				})}
			</div>
		</>
	);
};

export default Listado;
