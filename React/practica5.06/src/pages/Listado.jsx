import React, { useState, useEffect } from 'react';
import './Listado.css';
import MostrarDisco from './MostrarDisco';

const Listado = (props) => {
	const { discos, setDiscos } = props;

	const [buscar, setBuscar] = useState('');
	const [discosMostrar, setDiscosMostrar] = useState(discos); // Estado de los discos a mostrar, así cuando se filtre lo modificamos y no hay ningún problema

	// UseEffect necesario para cambiar los discos a mostrar, que dependen de discos
	useEffect(() => {
		setDiscosMostrar(discos);
	}, [discos]);

	const buscarDisco = () => {
		if (buscar === '') {
			setDiscosMostrar(discos);
		} else {
			setDiscosMostrar(discos.filter((d) => d.nombre === buscar));
		}
	};

	const limpiarDiscos = () => {
		setDiscos([]);
	};

	const borrarDisco = (id) => {
		// Le pasamos la función directamente a MostrarDisco para que sea más legible y fácil de entender
		setDiscos(discos.filter((d) => d.id !== id));
	};

	return (
		<>
			<form id="busqueda" name="busqueda">
				<label htmlFor="nomBusqueda">Buscar por nombre:</label>
				<input
					type="text"
					id="nomBusqueda"
					name="nomBusqueda"
					placeholder="Disco a buscar..."
					list="nombresDiscos"
					onChange={(e) => setBuscar(e.target.value)}
				/>
				<datalist id="nombresDiscos" name="nombresDiscos"></datalist>
				<input type="button" id="botonBuscar" value="Buscar" onClick={buscarDisco} />
				<input type="button" id="botonLimpiar" value="Limpiar" onClick={limpiarDiscos} />
			</form>
			<div className="discos">
				<MostrarDisco discos={discosMostrar} borrarDisco={borrarDisco} />
			</div>
		</>
	);
};

export default Listado;
