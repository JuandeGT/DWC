import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<nav className="menu">
			<Link to="/">Inicio</Link>
			<Link to="/peliculas">Peliculas</Link>
			<Link to="/interpretes">Intérpretes</Link>
			<Link to="/galeria">Galería</Link>
			<Link to="/acerca-de">Acerda de</Link>
		</nav>
	);
};

export default Menu;
