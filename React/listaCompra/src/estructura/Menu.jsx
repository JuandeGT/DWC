import React from 'react';
import { Link } from 'react-router-dom';
import useSesion from '../hooks/useSesion.js';
import './Menu.css';

const Menu = () => {
	const { sesionIniciada } = useSesion();
	return (
		<>
			<nav>
				<div id="links">
					<Link to="/">Inicio</Link>
					{sesionIniciada && (
						<>
							<Link to="/listado">Lista</Link>
						</>
					)}
				</div>
			</nav>
		</>
	);
};

export default Menu;
