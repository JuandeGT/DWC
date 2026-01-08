import React from 'react';
import './DiscoDetalle.css';

const DiscoDetalle = (props) => {
	const { disco, volver } = props;
	if (!disco) return null; // Nos aseguramos que si no hay disco no siga para que no salte error

	return (
		<>
			<div className="detalleDisco">
				<div className="izquierda">
					<h2>{disco.nombre}</h2>
					{disco.caratula !== '' && <img src={disco.caratula} alt={`Carátula de ${disco.nombre}`} className="imagen" />}
				</div>
				<div className="derecha">
					<p>
						<strong>Grupo o músico:</strong> {disco.musico}
					</p>
					<p>
						<strong>Género:</strong> {disco.genero}
					</p>
					{disco.fecha !== '' && (
						<p>
							<strong>Año:</strong> {disco.fecha}
						</p>
					)}
					{disco.localizacion !== '' && (
						<p>
							<strong>Localización:</strong> {disco.localizacion}
						</p>
					)}
					<p>
						<strong>Prestado:</strong> {disco.prestado ? 'Sí' : 'No'}
					</p>
					<button onClick={volver} className="boton">
						Volver a la lista
					</button>
				</div>
			</div>
		</>
	);
};

export default DiscoDetalle;
