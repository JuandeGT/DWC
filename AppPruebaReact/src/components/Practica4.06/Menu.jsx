import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
	return (
		<nav className="menu">
			<ul className="menu-lista">
				<li>
					<Link to="/contacto">Contacto</Link>
				</li>
				<li>
					<Link to="/acerca-de">Acerda de</Link>
				</li>
				<li>
					<Link to="/productos">Productos</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
