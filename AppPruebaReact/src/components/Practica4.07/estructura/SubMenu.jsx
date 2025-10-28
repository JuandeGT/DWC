import React from "react";
import { Link } from "react-router-dom";

const SubMenu = () => {
	return (
		<nav className="submenu">
			<Link to="/galeria/titulo">Titulo</Link>
			<Link to="/galeria/interprete">Intérpretes</Link>
			<Link to="/galeria/director">Director</Link>
		</nav>
	);
};

export default SubMenu;
