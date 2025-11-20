import React, { useState } from 'react';
import './ContadorLimite.css';

const ContadorLimite = () => {
	const valorInicial = Math.floor(Math.random() * 10) + 1;

	const [contador, setContador] = useState(valorInicial);

	/* const limite = (num) => {
		return num > 9 || num < 1;
	}; */

	const incrementar = (num) => {
		setContador(num + 1);
	};

	const decrementar = (num) => {
		setContador(num - 1);
	};

	return (
		<>
			<div className="contador_container">
				<h1>Contador límite</h1>
				<p>
					<button
						onClick={() => {
							incrementar(contador);
						}}
						disabled={contador > 9}
					>
						Incrementar
					</button>
				</p>
				<p>
					<button
						onClick={() => {
							decrementar(contador);
						}}
						disabled={contador < 1}
					>
						Decrementar
					</button>
				</p>
				<div>{contador}</div>
			</div>
		</>
	);
};

export default ContadorLimite;
