import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import InicioSesion from "../pages/InicioSesion.jsx";
import Registrarse from "../pages/Registrarse.jsx";
import ListadoProductos from "../pages/ListadoProductos.jsx";
import Error from "../pages/Error.jsx";
import FormularioProducto from "../pages/FormularioProducto.jsx";
import useSesion from "../hooks/useSesion.js";
import ListasCompra from "../pages/ListasCompra.jsx";
import FormularioLista from "../pages/FormularioLista.jsx";
import AgregarALista from "../pages/AgregarALista.jsx";

const Rutas = () => {
	const { sesionIniciada } = useSesion();
	return (
		<>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/inicio-sesion" element={<InicioSesion />} />
				<Route path="/registrarse" element={<Registrarse />} />
				<Route path="/listado-productos" element={<ListadoProductos />} />
				{sesionIniciada && (
					<>
						<Route path="/listas-compra" element={<ListasCompra />} />
						<Route path="/crear-producto" element={<FormularioProducto />} />
						<Route
							path="/editar-producto/:id"
							element={<FormularioProducto />}
						/>
						<Route path="/crear-lista" element={<FormularioLista />} />
						<Route path="/editar-lista/:id" element={<FormularioLista />} />
						<Route path="/agregar-productos/:id" element={<AgregarALista />} />
					</>
				)}
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
};

export default Rutas;
