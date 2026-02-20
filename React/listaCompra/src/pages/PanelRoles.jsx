import React, { useEffect } from 'react';
import useSesion from '../hooks/useSesion.js';
import Cargando from './Cargando.jsx';
import './PanelRoles.css';

const PanelRoles = () => {
	const { roles, obtenerTodosRoles, cambiarRol, cargando, administrador } = useSesion();

	useEffect(() => {
		if (administrador) {
			obtenerTodosRoles();
		}
	}, [administrador]);

	const manejarRol = (id_rol, nuevoRol) => {
		cambiarRol(id_rol, nuevoRol);
	};

	return (
		<div className="panel-roles-wrapper">
			<div className="panel-roles-header">
				<h2>Panel de Administración</h2>
				<p>Gestiona los permisos y roles de los usuarios de la plataforma.</p>
			</div>

			{cargando && (!roles || roles.length === 0) ? (
				<Cargando />
			) : (
				<div className="panel-roles-content">
					{!roles || roles.length === 0 ? (
						<p className="panel-roles-vacio">No se han encontrado usuarios.</p>
					) : (
						<div className="tabla-responsive">
							<table className="tabla-roles">
								<thead>
									<tr>
										<th>Email del Usuario</th>
										<th>Rol Actual</th>
										<th>Acción</th>
									</tr>
								</thead>
								<tbody>
									{roles.map((user) => (
										<tr key={user.id_rol}>
											<td className="td-email">{user.email}</td>
											<td>
												<span className={`badge-rol ${user.rol}`}>{user.rol}</span>
											</td>
											<td>
												<select
													className="select-cambiar-rol"
													value={user.rol}
													onChange={(e) => manejarRol(user.id_rol, e.target.value)}
												>
													<option value="usuario">Usuario</option>
													<option value="administrador">Administrador</option>
												</select>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default PanelRoles;
