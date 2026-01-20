import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cabecera from "./estructura/Cabecera.jsx";
import Menu from "./estructura/Menu.jsx";
import Contenido from "./estructura/Contenido.jsx";
import Rutas from "./routes/Rutas.jsx";
import Pie from "./estructura/Pie.jsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Cabecera />
			<Menu />
			<Contenido>
				<Rutas />
			</Contenido>
			<Pie />
		</>
	);
}

export default App;
