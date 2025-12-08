import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
	return (
		<>
			<nav className="navbar">
				<div id="links">
					<Link to="/" className="nav-link">
						Inico
					</Link>
					<Link to="/peliculas" className="nav-link">
						Peliculas
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Menu;
