import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cabecera from './components/Practica4.07/estructura/Cabecera.jsx';
import Pie from './components/Practica4.07/estructura/Pie.jsx';
import Menu from './components/Practica4.07/estructura/Menu.jsx';
import Contenido from './components/Practica4.07/estructura/Contenido.jsx';
import './App.css';

function App() {
	return (
		<>
			<Cabecera />
			<Menu />
			<Contenido />
			<Pie />
		</>
	);
}

export default App;
