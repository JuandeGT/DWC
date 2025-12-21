import React from 'react';
import './Inicio.css';

const Inicio = () => {
	return (
		<>
			<div id="inicio">
				<div className="contenido-hero">
					<h2>Star Wars Wiki</h2>
					<div className="separador"></div>
					<p>
						Hace mucho tiempo, en una galaxia muy, muy lejana... La República Galáctica está sumida en el caos. Los
						impuestos de las rutas comerciales a los sistemas estelares exteriores están en disputa.
					</p>
					<p>
						Adéntrate en los archivos de la Orden Jedi y explora la base de datos definitiva. Descubre los secretos de
						la Fuerza, revive las batallas más épicas y conoce a los héroes y villanos que forjaron el destino de la
						galaxia.
					</p>
					<button className="boton-explorar">Que la fuerza te acompañe</button>
				</div>
			</div>
		</>
	);
};

export default Inicio;
