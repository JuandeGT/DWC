import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Cabecera from './estructura/Cabecera.jsx';
import Contenido from './estructura/Contenido.jsx';
import Pie from './estructura/Pie.jsx';
import Rutas from './routes/Rutas.jsx';

function App() {
	//Comprobamos si se soporta el storage para poder acceder a la aplicacion
	if (typeof Storage === 'undefined') {
		return (
			<>
				<div className="errores">
					<p>Comprate un pc que soporte un buen navegador no la puta tostadora de mierda que tienes</p>
				</div>
			</>
		);
	}
	//Seguimos con la aplicacion
	let discosInicial = [];
	let discosStorage = localStorage.getItem('discos');
	if (discosStorage) {
		discosInicial = JSON.parse(discosStorage);
	}

	const [discos, setDiscos] = useState(discosInicial);
	useEffect(() => {
		localStorage.setItem('discos', JSON.stringify(discos));
	}, [discos]);
	/* Usamos el useEffect aquí para que cuando se cambie el estado discos en toda la app entre y se suba al storage,
	ya que les pasamos el setDiscos (idea muy buena de Irene [si hay algún error en esa parte es su culpa :)]) */
	return (
		<>
			<Cabecera />
			<Contenido>
				<Rutas discos={[...discos]} setDiscos={setDiscos} />
			</Contenido>
			<Pie />
		</>
	);
}

export default App;
