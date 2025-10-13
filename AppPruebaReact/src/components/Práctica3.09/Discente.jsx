import React from 'react';

const Discente = ({ id, nombre, apellidos, curso, aficiones, comida, modoDesmatricular, desmatricular }) => {
	return (
		<>
			<div>
				<p
					onClick={() => {
						if (modoDesmatricular) desmatricular(id);
					}}
				>
					{nombre}.
				</p>
				<p>{apellidos}.</p>
				<p>{curso}.</p>
				<p>{aficiones.join(', ')}.</p>
				<p>{comida}.</p>
			</div>
		</>
	);
};

export default Discente;
