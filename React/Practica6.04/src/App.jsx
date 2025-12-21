import { useState } from 'react';
import './App.css';
import Cabecera from './estructura/Cabecera.jsx';
import Contenido from './estructura/Contenido.jsx';
import Rutas from './router/Rutas.jsx';
import Pie from './estructura/Pie.jsx';

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
