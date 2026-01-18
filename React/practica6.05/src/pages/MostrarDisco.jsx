import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DiscoDetalle from './DiscoDetalle.jsx';

const MostrarDisco = (props) => {
	const { discos, borrarDisco } = props;
	if (discos.length === 0) return null; // Nos aseguramos que si está vacío no siga para que no salte error

	const [discoSeleccionado, setDiscoSeleccionado] = useState(null); // Crearmos el estado para pasarle a DiscoDetalle

	const gestionarCLick = (evento, disco) => {
		if (evento.target.tagName === 'IMG') {
			return;
		}
		setDiscoSeleccionado(disco);
	};

	// A discoDetalle le pasamos una funcion para quitar el disco seleccionado y volver al listado normal
	return (
		<>
			{discoSeleccionado ? (
				<DiscoDetalle disco={discoSeleccionado} volver={() => setDiscoSeleccionado(null)} />
			) : (
				discos.map((d) => (
					<div className="discoListado" key={d.id} onClick={(e) => gestionarCLick(e, d)}>
						<div className="izquierda">
							<h2>{d.nombre}</h2>
							{d.caratula !== '' && <img src={d.caratula} alt={`Carátula de ${d.nombre}`} className="imagen" />}
						</div>
						<div className="derecha">
							<p>
								<strong>Grupo o músico:</strong> {d.musico}
							</p>
							<p>
								<strong>Género de música:</strong> {d.genero}
							</p>
							<img
								src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
								alt="Icono"
								className="icono"
								onClick={() => borrarDisco(d.id)}
							/>
							<Link to={`/discos/${d.id}`}>
								<button>Editar</button>
							</Link>
						</div>
					</div>
				))
			)}
		</>
	);
};

export default MostrarDisco;
