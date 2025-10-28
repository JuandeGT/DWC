import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<nav className="menu">
			<div className="menu-inner">
				<Link to="/">Inicio</Link>
				<Link to="/peliculas">Peliculas</Link>
				<Link to="/interpretes">Intérpretes</Link>
				<Link to="/galeria/todas">Galería</Link>
				<Link to="/acerca-de">Acerca de</Link>
			</div>
		</nav>
	);
};

export default Menu;
