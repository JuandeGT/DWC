import React, { useState } from 'react';
import matriculadosJSON from './matriculados.json';
import Discente from './Discente.jsx';

const Matricula = () => {
	const valorInicial = matriculadosJSON.discentes;

	const [matriculados, setMatriculados] = useState(valorInicial);
	const [orden, setOrden] = useState(true);
	const [modoDesmatricular, setModoDesmatricular] = useState(false);

	const segundoDaw = () => {
		const segundo = matriculados.filter((m) => {
			return m.curso === '2DAW';
		});
		setMatriculados(segundo);
	};

	const primerCurso = () => {
		const primero = matriculados.filter((m) => {
			return m.curso.includes('1');
		});
		setMatriculados(primero);
	};

	const daw = () => {
		const daw = matriculados.filter((m) => {
			return m.curso.includes('DAW');
		});
		setMatriculados(daw);
	};

	const lectura = () => {
		const leer = matriculados.filter((m) => {
			return m.aficiones.includes('lectura');
		});
		setMatriculados(leer);
	};

	const ordenarApellidos = () => {
		const ordenado = [...matriculados];
		ordenado.sort((a, b) => {
			if (a.apellidos > b.apellidos) return orden ? 1 : -1;
			if (a.apellidos < b.apellidos) return orden ? -1 : 1;
		});
		setMatriculados(ordenado);
		setOrden(!orden);
	};

	const reiniciar = () => {
		setMatriculados(valorInicial);
	};

	const desmatricular = (identificador) => {
		setMatriculados(matriculados.filter((discente) => discente.id !== identificador));
	};

	return (
		<>
			<div>
				<h1>Matriculados:</h1>
				<p>
					<button
						onClick={() => {
							segundoDaw();
						}}
					>
						2DAW
					</button>
					<button
						onClick={() => {
							primerCurso();
						}}
					>
						Primero
					</button>
					<button
						onClick={() => {
							daw();
						}}
					>
						DAW
					</button>
					<button
						onClick={() => {
							lectura();
						}}
					>
						Lectura
					</button>
					<button
						onClick={() => {
							ordenarApellidos();
						}}
					>
						OrdenarApellidos
					</button>
					<button
						onClick={() => {
							reiniciar();
						}}
					>
						Reiniciar
					</button>
					<button
						onClick={() => {
							setModoDesmatricular(!modoDesmatricular);
						}}
					>
						Desmatricular
					</button>
				</p>
			</div>
			<div>
				{matriculados.map((discente) => {
					return (
						<Discente
							key={crypto.randomUUID()}
							id={discente.id}
							nombre={discente.nombre}
							apellidos={discente.apellidos}
							curso={discente.curso}
							aficiones={discente.aficiones}
							comida={discente.comida}
							modoDesmatricular={modoDesmatricular}
							desmatricular={desmatricular}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Matricula;
