import { supabaseConexion } from "../supabase/supabase.js";

const useSupabase = () => {
	const crearCuentaSupa = async ({ email, password, name }) => {
		try {
			const { data, error } = await supabaseConexion.auth.signUp({
				email: email,
				password: password,
				options: {
					data: {
						display_name: name,
					},
				},
			});
			if (error) {
				throw error;
			}
		} catch (error) {
			throw error;
		}
	};

	const iniciarSesionSupa = async ({ email, password }) => {
		try {
			const { data, error } = await supabaseConexion.auth.signInWithPassword({
				email: email,
				password: password,
			});
			if (error) {
				throw error;
			}
		} catch (error) {
			throw error;
		}
	};

	const cerrarSesionSupa = async () => {
		try {
			await supabaseConexion.auth.signOut();
		} catch (error) {
			throw error;
		}
	};

	const obtenerUsuarioSupa = async () => {
		try {
			const { data, error } = await supabaseConexion.auth.getUser();
			if (error) {
				throw error;
			}
			return data.user;
		} catch (error) {
			throw error;
		}
	};

	const suscripcion = (f) => {
		return supabaseConexion.auth.onAuthStateChange(f);
	};

	return {
		crearCuentaSupa,
		iniciarSesionSupa,
		cerrarSesionSupa,
		obtenerUsuarioSupa,
		suscripcion,
	};
};

export default useSupabase;
