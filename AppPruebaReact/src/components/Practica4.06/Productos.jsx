import React from 'react';
import listado from '../assets/productos.json';
import BotonInicio from './BotonInicio';

const Producto = () => {
	return (
		<>
			<h2>Listado de productos</h2>
			<div className="listadoProductos">
				{listado.productos.length
					? listado.productos.map((elemento) => {
							return <p key={crypto.randomUUID()}>{elemento.nombre}</p>;
					  })
					: 'No se han encontrado productos.'}
			</div>
			<BotonInicio />
		</>
	);
};

export default Producto;
