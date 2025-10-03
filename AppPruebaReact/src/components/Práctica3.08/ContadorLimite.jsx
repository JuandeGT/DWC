import React, { useState } from "react";

const ContadorLimite = () => {
	const valorInicial = Math.floor(Math.random() + 1 * 10);

	const [contador, setContador] = useState(valorInicial);

	const limite = (num) => {
		return num > 9 || num < 1;
	};

	const incrementar = (num) => {
		setContador(num + 1);
	};

	const decrementar = (num) => {
		setContador(num - 1);
	};

	return (
		<>
			<h1>Contador límite</h1>
			<p>
				<button
					onClick={() => {}}
					{...(limite(contador) ? (disabled = true) : (disabled = false))}
				>
					Incrementar
				</button>
			</p>
		</>
	);
};

export default ContadorLimite;
