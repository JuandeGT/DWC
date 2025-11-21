import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cabecera from "./estructura/Cabecera.jsx";
import Contenido from "./estructura/Contenido.jsx";
import Pie from "./estructura/Pie.jsx";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Cabecera />
			<Contenido />
			<Pie />
		</>
	);
}

export default App;
