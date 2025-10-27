import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<nav className="menu">
			<ul className="menu-lista">
				<li>
					<Link to="/">Inicio</Link>
				</li>
				<li>
					<Link to="/peliculas">Peliculas</Link>
				</li>
				<li>
					<Link to="/interpretes">Intérpretes</Link>
				</li>
				<li>
					<Link to="/galeria">Galería</Link>
				</li>
				<li>
					<Link to="/acerca-de">Acerda de</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
