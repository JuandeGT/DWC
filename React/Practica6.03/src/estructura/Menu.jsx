import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<>
			<nav>
				<div id="links">
					<Link to="/">Inico</Link>
					<Link to="/peliculas">Peliculas</Link>
				</div>
			</nav>
		</>
	);
};

export default Menu;
