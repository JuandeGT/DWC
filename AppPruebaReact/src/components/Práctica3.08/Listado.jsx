import React, { useState } from "react";

const Listado = () => {
	const valorInicial = [];

	const [listado, setListado] = useState(valorInicial);

	const generarNumero = () => {
		let numAleatorio = Math.floor(Math.random() + 1 * 100);
		setListado([...listado, numAleatorio]);
	};

	const eliminarListado = () => {
		setListado([]);
	};

	return (
		<>
			<p>
				<ul>
					<h1>Listado números</h1>
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
			</p>
		</>
	);
};

export default Listado;
