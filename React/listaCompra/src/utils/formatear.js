const formatearPrecio = (cantidad) => {
	return Number(cantidad).toLocaleString('es-ES', {
		style: 'currency',
		currency: 'EUR',
		useGrouping: true,
	});
};

const formatearDecimal = (cantidad) => {
	return Number(cantidad).toLocaleString('es-ES', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
		useGrouping: true,
	});
};

const formatearFecha = (fecha) => {
	if (!fecha) return 'Fecha desconocida';
	const nuevaFecha = new Date(fecha);
	return nuevaFecha.toLocaleDateString('es-ES', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
};

export { formatearPrecio, formatearDecimal, formatearFecha };
