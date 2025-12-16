'use strict';

const recogerFormulario = (formulario) => {
	return {
		id: crypto.randomUUID(),
		nombre: formulario[0].value,
		clima: formulario[1].value,
		diametro: formulario[2].value,
		imagen: formulario[3].value,
	};
};

export { recogerFormulario };
