import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import Formulario from '../pages/Formulario.jsx';
import Listado from '../pages/Listado.jsx';
import Errores from '../pages/Errores.jsx';

const Rutas = (props) => {
	const { discos, setDiscos } = props;
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="formulario" element={<Formulario discos={discos} setDiscos={setDiscos} />} />
				<Route path="listado" element={<Listado discos={discos} setDiscos={setDiscos} />} />
				<Route path="/*" element={<Errores errores="URL inválida" />} />
			</Routes>
		</>
	);
};

export default Rutas;
