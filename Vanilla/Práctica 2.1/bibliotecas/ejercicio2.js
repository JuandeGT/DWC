"use strict";

function puntuacionMedia() {
	let i,
		sumaPuntos = 0;
	for (i = 0; i < arguments.length; i++) {
		if (!isNaN(arguments[i])) {
			sumaPuntos += arguments[i];
		}
	}

	return sumaPuntos / arguments.length;
}

function mejorMedia(mediaEquipoJuan, mediaEquipoMiguel, mediaEquipoMaria) {
	let ganador, mediaGanador;
	if (
		mediaEquipoJuan == mediaEquipoMiguel &&
		mediaEquipoJuan == mediaEquipoMaria
	) {
		ganador = "empate";
		mediaGanador = mediaEquipoJuan;
	} else {
		if (
			mediaEquipoJuan > mediaEquipoMiguel &&
			mediaEquipoJuan > mediaEquipoMaria
		) {
			ganador = "Juan";
			mediaGanador = mediaEquipoJuan;
		} else {
			if (
				mediaEquipoMaria > mediaEquipoJuan &&
				mediaEquipoMaria > mediaEquipoMiguel
			) {
				ganador = "María";
				mediaGanador = mediaEquipoMaria;
			} else {
				ganador = "Miguel";
				mediaGanador = mediaEquipoMiguel;
			}
		}
	}

	console.log(`El ganador es ${ganador} con una media de ${mediaGanador}`);
}

export { puntuacionMedia, mejorMedia };
