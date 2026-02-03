const formatearPrecio = (cantidad) => {
	return Number(cantidad).toLocaleString("es-ES", {
		style: "currency",
		currency: "EUR",
	});
};

const formatearDecimal = (cantidad) => {
	return Number(cantidad).toLocaleString("es-ES", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
};

export { formatearPrecio, formatearDecimal };
