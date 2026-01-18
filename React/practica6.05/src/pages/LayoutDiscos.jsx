import React from 'react';
import { Outlet } from 'react-router-dom';
import ProveedorDiscos from '../context/ProveedorDiscos.jsx';
import Notificaciones from '../estructura/Notificaciones.jsx';
import Cargando from './Cargando.jsx';

const LayoutDiscos = () => {
	return (
		<>
			<ProveedorDiscos>
				<Cargando />
				<Notificaciones />
				{/* Esto pondrá el listado o el formulario, dependiendo de la ruta pero ambos compartirán el proveedor */}
				<Outlet />
			</ProveedorDiscos>
		</>
	);
};

export default LayoutDiscos;
