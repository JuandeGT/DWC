import React, { Children } from "react";

const Interprete = (props) => {
	return (
		<div>
			<h2>{props.nombre}</h2>
			<image>{props.foto}</image>
			<p>{props.Children}</p>
		</div>
	);
};

export default Interprete;
