import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import InicioSesion from '../pages/InicioSesion.jsx';
import Registrarse from '../pages/Registrarse.jsx';
import Listado from '../pages/Listado.jsx';
import Error from '../pages/Error.jsx';

const Rutas = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/inicio-sesion" element={<InicioSesion />} />
				<Route path="/registrarse" element={<Registrarse />} />
				<Route path="/listado" element={<Listado />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default Rutas;
