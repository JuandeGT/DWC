import Reac, { useContext } from 'react';
import { useState, useEffect } from 'react';
import { ContextoPeliculas } from '../context/ContextoPeliculas';
import { traerPersonajes } from '../functions/starwars.js';
import { traerVehiculos } from '../functions/starwars.js';
import './PeliculasDetalle.css';

const PeliculaDetalle = () => {
	const { seleccionada: pelicula } = useContext(ContextoPeliculas);

	const [personajes, setPersonajes] = useState([]);
	const [listaVehiculos, setListaVehiculos] = useState([]);
	const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);
	const [error, setError] = useState(null);
	const [vehiculos, setVehiculos] = useState([]);
	const [mostrarVehiculos, setMostrarVehiculos] = useState(false);

	useEffect(() => {
		const cargarPersonajes = async () => {
			try {
				const datos = await traerPersonajes(pelicula.characters);
				setPersonajes(datos);
				setPersonajeSeleccionado(null);
				setError(null);
			} catch (error) {
				setError(error.message);
			}
		};
		cargarPersonajes();
	}, [pelicula]);

	useEffect(() => {
		const cargarListaVehiculos = async () => {
			if (!personajeSeleccionado) {
				setListaVehiculos([]);
				return;
			}
			if (personajeSeleccionado.vehicles.length === 0) {
				setListaVehiculos([]);
				return;
			}
			try {
				const datos = await traerVehiculos(personajeSeleccionado.vehicles);
				setListaVehiculos(datos);
			} catch (error) {
				setListaVehiculos([]);
			}
		};

		cargarListaVehiculos();
		setVehiculos([]);
		setMostrarVehiculos(false);
	}, [personajeSeleccionado]);

	if (!pelicula) return null;

	const cargarVehiculos = async () => {
		try {
			const datos = await traerVehiculos(personajeSeleccionado.vehicles);
			setVehiculos(datos);
			setMostrarVehiculos(true);
		} catch (error) {
			setVehiculos([]);
			setMostrarVehiculos(false);
		}
	};

	const formatearFecha = (fecha) => {
		const partes = fecha.split('-');
		return `${partes[2]}/${partes[1]}/${partes[0]}`;
	};

	return (
		<div className="detalle-contenido">
			<header className="detalle-header">
				<h2 className="titulo">{pelicula.title}</h2>
				<div className="info">
					<span>Fecha de lanzamiento: {formatearFecha(pelicula.release_date)}</span>
					<p>Director: {pelicula.director}</p>
					<p>Productor: {pelicula.producer}</p>
				</div>
			</header>
			<p className="sinopsis">Sinopsis: {pelicula.opening_crawl}</p>

			<div className="personajes">
				<h3>Protagonistas</h3>
				<ul>
					{personajes.map((pers) => (
						<li key={crypto.randomUUID()} onClick={() => setPersonajeSeleccionado(pers)} style={{ cursor: 'pointer' }}>
							{pers.name}
						</li>
					))}
				</ul>
			</div>

			{personajeSeleccionado && (
				<div className="ficha-personaje">
					<h4>{personajeSeleccionado.name}</h4>
					<div className="datos">
						<p>Género: {personajeSeleccionado.gender}</p>
						<p>Altura: {personajeSeleccionado.height} cm</p>
						<p>Peso: {personajeSeleccionado.mass} kg</p>
						<p>Color de pelo: {personajeSeleccionado.hair_color}</p>
						<p>Color de ojos: {personajeSeleccionado.eye_color}</p>
					</div>
					{listaVehiculos.length === 0 ? (
						<p>Este personaje no pilota vehículos.</p>
					) : (
						<div>
							{listaVehiculos.map((v) => (
								<p key={crypto.randomUUID()} className="vehiculos">
									{v.name}
								</p>
							))}
						</div>
					)}
					<button className={listaVehiculos.length !== 0 ? 'activo' : 'inactivo'} onClick={cargarVehiculos}>
						Pilota
					</button>
					{mostrarVehiculos && (
						<div className="datos">
							{vehiculos.length === 0 ? (
								<></>
							) : (
								vehiculos.map((v) => (
									<div key={crypto.randomUUID()} className="vehiculo">
										<h5>{v.name}</h5>
										<p>Modelo: {v.model}</p>
										<p>Fabricante: {v.manufacturer}</p>
										<p>Velocidad máxima: {v.max_atmosphering_speed}</p>
										<p>Tripulación: {v.crew}</p>
										<p>Pasajeros: {v.passengers}</p>
									</div>
								))
							)}
						</div>
					)}
				</div>
			)}

			{error && <p className="error">Se ha producido un error: {error}</p>}
		</div>
	);
};

export default PeliculaDetalle;
