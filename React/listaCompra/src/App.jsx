import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cabecera from "./estructura/Cabecera.jsx";
import Menu from "./estructura/Menu.jsx";
import Contenido from "./estructura/Contenido.jsx";
import Rutas from "./routes/Rutas.jsx";
import Pie from "./estructura/Pie.jsx";
import Notificaciones from "./estructura/Notificaciones.jsx";
import ProveedorProductos from "./contexts/ProveedorProductos.jsx";
import ProveedorListas from "./contexts/ProveedorListas.jsx";

function App() {
	return (
		<>
			<Cabecera />
			<Menu />
			<Notificaciones />
			<ProveedorProductos>
				<ProveedorListas>
					<Contenido>
						<Rutas />
					</Contenido>
				</ProveedorListas>
			</ProveedorProductos>
			<Pie />
		</>
	);
}

export default App;
