const formatearPrecio = (cantidad) => {
	return Number(cantidad).toLocaleString("es-ES", {
		style: "currency",
		currency: "EUR",
		useGrouping: true,
	});
};

const formatearDecimal = (cantidad) => {
	return Number(cantidad).toLocaleString("es-ES", {
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
		useGrouping: true,
	});
};

export { formatearPrecio, formatearDecimal };
