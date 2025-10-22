import React from 'react';

const Taquilla = ({ taquilla }) => {
	const formatearDinero = (taquilla) => {
		return new Intl.NumberFormat('es-ES', {
			style: 'currency',
			currency: 'EUR',
			minimumFractionDigits: 2,
		}).format(taquilla);
	};

	return <>{formatearDinero(taquilla)}</>;
};

export default Taquilla;
