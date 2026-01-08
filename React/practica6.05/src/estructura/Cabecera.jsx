import React from "react";
import Menu from "./Menu.jsx";
import "./Cabecera.css";

const Cabecera = () => {
	return (
		<>
			<header id="cabecera">
				<h3>Colección Discos</h3>
				<div id="menu">
					<Menu />
				</div>
			</header>
		</>
	);
};

export default Cabecera;
