'use strict';

const usuarios = [
	{
		nombre: 'Luis',
		preferencias: { tema: 'oscuro', idioma: 'español', edad: 25 },
		contacto: {
			direccion: {
				calle: 'Calle falsa, 666',
				localidad: 'Elda',
				pais: 'España',
			},
			correoelectronico: 'correofalso@yahoo.com',
			telefono: '123456789',
		},
	},
	{
		nombre: 'Marta',
		preferencias: { tema: 'claro', idioma: 'catalán', edad: 15 },
		contacto: {
			direccion: {
				calle: 'Calle también falsa, 123',
				localidad: 'Andorra la Vella',
				pais: 'Andorra',
			},
			correoelectronico: 'correoandorrano@gmail.com',
			telefono: '',
		},
	},
	{
		nombre: 'Alberto',
		preferencias: { tema: 'oscuro', idioma: 'español', edad: 56 },
		contacto: {
			direccion: {
				calle: 'Elm Street, 666',
				localidad: 'Petrer',
				pais: 'España',
			},
			correoelectronico: 'correonulo@yahoo.com',
			telefono: '548632478',
		},
	},
	{
		nombre: 'Jacinto',
		preferencias: { tema: 'claro', idioma: 'inglés', edad: 17 },
		contacto: {
			direccion: {
				calle: 'Elm Street, 667',
				localidad: 'Elda',
				pais: 'España',
			},
			correoelectronico: 'correofalso@gmail.com',
			telefono: '',
		},
	},
	{
		nombre: 'Rigoberta',
		preferencias: { tema: 'claro', idioma: 'francés', edad: 34 },
		contacto: {
			direccion: {
				calle: 'Calle inexistente, 6',
				localidad: 'Burdeos',
				pais: 'Francia',
			},
			correoelectronico: 'correofalso@gmail.com',
			telefono: '232547859',
		},
	},
	{
		nombre: 'Sandra',
		preferencias: { tema: 'oscuro', idioma: 'español', edad: 18 },
		contacto: {
			direccion: {
				calle: 'Calle de mentira, s/n',
				localidad: 'Petrer',
				pais: 'España',
			},
			correoelectronico: 'estecorreonoexiste@gmail.com',
			telefono: '452158697',
		},
	},
	{
		nombre: 'Sandra',
		preferencias: { tema: 'oscuro', idioma: 'español', edad: 18 },
		contacto: {
			direccion: {
				calle: 'Calle existente, 34',
				localidad: 'Petrer',
				pais: 'España',
			},
			correoelectronico: 'correoinexistente@yahoo.com',
			telefono: '',
		},
	},
];

function insertarUsuario(usuarioNuevo, usuarios) {
	return [...usuarios, usuarioNuevo];
}

function mayoresEdad(usuarios) {
	return usuarios.filter((u) => u.preferencias.edad >= 18);
}

function usuariosYahoo(usuarios) {
	return usuarios.filter((u) => u.contacto.correoelectronico.endsWith('@yahoo.com'));
}

function usuariosClaroMayorEspanya(usuarios) {
	return usuarios.filter(
		(u) => u.preferencias.tema === 'claro' && u.preferencias.edad >= 18 && u.contacto.direccion.pais === 'España'
	);
}

function usuariosIncompletos(usuarios) {
	return usuarios.filter((u) => {
		return (
			!u.nombre ||
			!u.preferencias.tema ||
			!u.preferencias.idioma ||
			!u.preferencias.edad ||
			!u.contacto.direccion.calle ||
			!u.contacto.direccion.localidad ||
			!u.contacto.direccion.pais ||
			!u.contacto.correoelectronico ||
			!u.contacto.telefono
		);
	});
}

function usuariosApellidos(usuarios) {
	return usuarios.map((u) => ({ ...u, apellidos: 'No indicado' }));
}

function anadirCodigoDireccion(usuarios) {
	return usuarios.map((u) => ({
		...u,
		contacto: {
			...u.contacto,
			direccion: {
				...u.contacto.direccion,
				codigo: '00000',
			},
		},
	}));
}

export {
	usuarios,
	insertarUsuario,
	mayoresEdad,
	usuariosYahoo,
	usuariosClaroMayorEspanya,
	usuariosIncompletos,
	usuariosApellidos,
	anadirCodigoDireccion,
};
