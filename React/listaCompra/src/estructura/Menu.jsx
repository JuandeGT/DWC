import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
	return (
		<>
			<nav>
				<div id="links">
					<Link to="/">Inicio</Link>
				</div>
			</nav>
		</>
	);
};

export default Menu;
