const formatearPrecio = (cantidad) => {
	return Number(cantidad).toLocaleString("es-ES", {
		style: "currency",
		currency: "EUR",
	});
};

const formatearDecimal = (cantidad) => {
	return Number(cantidad).toLocaleString("es-ES", {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	});
};

export { formatearPrecio, formatearDecimal };
