import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Cabecera from './estructura/Cabecera.jsx';
import Contenido from './estructura/Contenido.jsx';
import Pie from './estructura/Pie.jsx';
import Rutas from './routes/Rutas.jsx';

function App() {
	return (
		<>
			<Cabecera />
			<Contenido>
				<Rutas />
			</Contenido>
			<Pie />
		</>
	);
}

export default App;
