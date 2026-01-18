import React, { useState, useEffect } from 'react';
import './Listado.css';
import MostrarDisco from './MostrarDisco.jsx';
import useDiscos from '../hooks/useDiscos.js';
import Confirmacion from '../estructura/Confirmacion.jsx';

const Listado = () => {
	const { discos, borrarDisco, cargando, lanzarExito } = useDiscos();

	const [buscar, setBuscar] = useState('');
	const [discosMostrar, setDiscosMostrar] = useState(discos); // Estado de los discos a mostrar, así cuando se filtre lo modificamos y no hay ningún problema
	const [idBorrar, setIdBorrar] = useState(null);

	// UseEffect necesario para cambiar los discos a mostrar, que dependen de discos
	useEffect(() => {
		setDiscosMostrar(discos);
	}, [discos]);

	const buscarDisco = () => {
		if (buscar === '') {
			setDiscosMostrar(discos);
		} else {
			setDiscosMostrar(discos.filter((d) => d.nombre.toLowerCase().includes(buscar.toLowerCase())));
		}
	};

	const limpiarDiscos = () => {
		setBuscar(''); // Limpiamos también la barra de búsqueda
		setDiscosMostrar(discos);
	};

	const borrar = (id) => {
		setIdBorrar(id);
	};

	// Hacemos estas funciones aquí para que el componente confirmación no acceda a borrarDisco
	const confirmarBorrado = async () => {
		if (!idBorrar) return;
		borrarDisco(idBorrar);
		lanzarExito('Disco eliminado correctamente');
		setIdBorrar(null);
	};

	const cancelarBorrado = () => {
		setIdBorrar(null);
	};

	return (
		<>
			{idBorrar && (
				<Confirmacion
					mensaje="Esta acción no se puede deshacer. ¿Quieres eliminar este disco de la lista?"
					onConfirmar={confirmarBorrado}
					onCancelar={cancelarBorrado}
				/>
			)}
			<form id="busqueda" name="busqueda" onSubmit={(e) => e.preventDefault()}>
				<label htmlFor="nomBusqueda">Buscar por nombre:</label>
				<input
					type="text"
					id="nomBusqueda"
					name="nomBusqueda"
					placeholder="Disco a buscar..."
					list="nombresDiscos"
					value={buscar}
					onChange={(e) => setBuscar(e.target.value)}
				/>
				<datalist id="nombresDiscos" name="nombresDiscos"></datalist>
				<input type="button" id="botonBuscar" value="Buscar" onClick={buscarDisco} />
				<input type="button" id="botonLimpiar" value="Limpiar" onClick={limpiarDiscos} />
			</form>
			<div className="discos">
				<MostrarDisco discos={discosMostrar} borrarDisco={borrar} />
			</div>
		</>
	);
};

export default Listado;
