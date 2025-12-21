import React, { useState, useEffect, createContext } from 'react';
import { traerPeliculas } from '../functions/starwars.js';

const ContextoPeliculas = createContext();

const ProveedorPeliculas = ({ children }) => {
	const [peliculas, setPeliculas] = useState([]);
	const [error, setError] = useState('');
	const [seleccionada, setSeleccionada] = useState(null);

	const urlPeliculas = 'http://swapi.py4e.com/api/films';

	const cargarPeliculas = async () => {
		try {
			const datos = await traerPeliculas(urlPeliculas);
			setPeliculas(datos.results ?? datos);
		} catch (error) {
			setError('Error en peliculas');
		}
	};

	const seleccionarPelicula = (id) => {
		const peli = peliculas.find((p) => p.episode_id === id);
		setSeleccionada(peli);
	};

	useEffect(() => {
		cargarPeliculas();
	}, []);

	const cosasParaExportar = {
		peliculas,
		seleccionada,
		seleccionarPelicula,
		error,
	};

	return <ContextoPeliculas value={cosasParaExportar}>{children}</ContextoPeliculas>;
};

export default ProveedorPeliculas;
export { ContextoPeliculas };
