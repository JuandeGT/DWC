import React, { useState, useEffect } from 'react';
import useProductos from '../hooks/useProductos.js';
import './FiltrarProducto.css';

const FiltrarProducto = () => {
	const { filtrar } = useProductos();

	const [filtros, setFiltros] = useState({
		nombre: '',
		precioMax: '',
		pesoMax: '',
	});

	const [orden, setOrden] = useState('nombre');

	useEffect(() => {
		filtrar(filtros, orden);
	}, [filtros, orden]);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setFiltros({ ...filtros, [name]: value });
	};

	return (
		<>
			<div className="filtros-panel">
				{/* SECCIÓN 1: ORDENAR (Radio Buttons) */}
				<div className="grupo-ordenar">
					<span className="titulo-filtro">Ordenar por:</span>
					<label>
						<input
							type="radio"
							name="orden"
							value="nombre"
							checked={orden === 'nombre'}
							onChange={(e) => setOrden(e.target.value)}
						/>
						A-Z
					</label>
					<label>
						<input
							type="radio"
							name="orden"
							value="precioAsc"
							checked={orden === 'precioAsc'}
							onChange={(e) => setOrden(e.target.value)}
						/>
						Precio Bajo
					</label>
					<label>
						<input
							type="radio"
							name="orden"
							value="precioDesc"
							checked={orden === 'precioDesc'}
							onChange={(e) => setOrden(e.target.value)}
						/>
						Precio Alto
					</label>
				</div>

				<hr className="separador" />

				{/* SECCIÓN 2: FILTRAR (Inputs separados) */}
				<div className="grupo-filtrar">
					<div className="input-wrapper">
						<label>Nombre</label>
						<input type="text" name="nombre" placeholder="Buscar..." value={filtros.nombre} onChange={handleInput} />
					</div>

					<div className="input-wrapper">
						<label>Precio Máx (€)</label>
						<input type="number" name="precioMax" placeholder="0.00" value={filtros.precioMax} onChange={handleInput} />
					</div>

					<div className="input-wrapper">
						<label>Peso Máx (kg)</label>
						<input type="number" name="pesoMax" placeholder="0.00" value={filtros.pesoMax} onChange={handleInput} />
					</div>
				</div>
			</div>
		</>
	);
};

export default FiltrarProducto;
