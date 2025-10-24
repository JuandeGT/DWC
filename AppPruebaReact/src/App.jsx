import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Practica4.06/Menu.jsx';
import Inicio from './components/Practica4.06/Inicio.jsx';
import Contacto from './components/Practica4.06/Contacto.jsx';
import AcercaDe from './components/Practica4.06/AcercaDe.jsx';
import Productos from './components/Practica4.06/Productos.jsx';
import Error from './components/Practica4.06/Error.jsx';
import Contenedor from './components/Practica4.05/Contenedor.jsx';
import Interprete from './components/Practica4.05/Interprete.jsx';
import Pelicula from './components/Practica4.05/Pelicula.jsx';
import Listado from './components/Practica3.08/Listado.jsx';
import ContadorLimite from './components/Practica3.08/ContadorLimite.jsx';
import ContadorLikes from './components/Practica3.08/ContadorLikes.jsx';
import Matricula from './components/Practica3.09/Matricula.jsx';
import './App.css';

function App() {
	return (
		<>
			<Menu />
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/contacto" element={<Contacto />} />
				<Route path="/acerca-de" element={<AcercaDe />} />
				<Route path="/productos" element={<Productos />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	);
}

export default App;
