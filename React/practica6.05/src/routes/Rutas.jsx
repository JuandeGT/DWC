import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import Formulario from '../pages/Formulario.jsx';
import FormularioEditar from '../pages/FormularioEditar.jsx';
import Listado from '../pages/Listado.jsx';
import Errores from '../pages/Errores.jsx';
import LayoutDiscos from '../pages/LayoutDiscos.jsx';

const Rutas = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route element={<LayoutDiscos />}>
					<Route path="formulario" element={<Formulario />} />
					<Route path="listado" element={<Listado />} />
					<Route path="discos/:id" element={<FormularioEditar />} />
				</Route>
				<Route path="/*" element={<Errores error="URL inválida" />} />
			</Routes>
		</>
	);
};

export default Rutas;
