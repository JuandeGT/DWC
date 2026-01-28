import React, { useState, useEffect } from 'react';
import useProductos from '../hooks/useProductos.js';
import './FiltrarProducto.css';

const FiltrarProducto = () => {
	const { filtrar, ordenar } = useProductos();

	const filtrosInicial = {
		nombre: '',
		precio: '',
		peso: '',
	};

	const [filtros, setFiltros] = useState(filtrosInicial);

	const [orden, setOrden] = useState('');

	const ordenarBien = (valor) => {
		setOrden(valor);
		ordenar(valor);
	};

	const filtrarBien = (tipo, valor) => {
		setFiltros({ ...filtrosInicial, [tipo]: valor });
		filtrar(tipo, valor);
	};

	const limpiar = () => {
		setFiltros(filtrosInicial);
		setOrden('');
		filtrar('nombre', '');
		ordenar('');
	};
	return (
		<>
			<div className="filtros-panel">
				<div className="grupo-ordenar">
					<span className="titulo-filtro">Ordenar por:</span>
					<label>
						<input
							type="radio"
							name="orden"
							value="nombre"
							checked={orden === 'nombre'}
							onChange={(e) => ordenarBien(e.target.value)}
						/>
						A-Z
					</label>
					<label>
						<input
							type="radio"
							name="orden"
							value="precio"
							checked={orden === 'precio'}
							onChange={(e) => ordenarBien(e.target.value)}
						/>
						Precio
					</label>
					<label>
						<input
							type="radio"
							name="orden"
							value="peso"
							checked={orden === 'peso'}
							onChange={(e) => ordenarBien(e.target.value)}
						/>
						Peso
					</label>
					<button onClick={limpiar}>Limpiar</button>
				</div>

				<hr className="separador" />

				<div className="grupo-filtrar">
					<div className="input-wrapper">
						<label>Nombre:</label>
						<input
							type="text"
							name="nombre"
							placeholder="Buscar..."
							value={filtros.nombre}
							onChange={(e) => {
								filtrarBien('nombre', e.target.value);
							}}
						/>
					</div>

					<div className="input-wrapper">
						<label>Precio Máx (€):</label>
						<input
							type="number"
							name="precio"
							placeholder="0.00"
							value={filtros.precio}
							onChange={(e) => {
								filtrarBien('precio', e.target.value);
							}}
						/>
					</div>

					<div className="input-wrapper">
						<label>Peso Máx (kg):</label>
						<input
							type="number"
							name="peso"
							placeholder="0.00"
							value={filtros.peso}
							onChange={(e) => {
								filtrarBien('peso', e.target.value);
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default FiltrarProducto;
