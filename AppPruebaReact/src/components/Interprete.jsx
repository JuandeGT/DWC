import React, { Children } from 'react';
import './Interprete.css';

const Interprete = (props) => {
	return (
		<div className="interprete">
			<img src={props.foto} alt="Foto" />
			<div className="interprete-info">
				<h2>{props.nombre}</h2>
				<p>{props.children}</p>
			</div>
		</div>
	);
};

export default Interprete;
