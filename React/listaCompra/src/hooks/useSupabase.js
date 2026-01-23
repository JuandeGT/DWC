const useSupabase = () => {
	const crearCuentaSupa = async (email, password) => {
		try {
			const { data, error } = await supabaseConexion.auth.signUp({
				email: email,
				password: password,
			});
			console.log(data);
			if (error) {
				throw error;
			}
		} catch (error) {
			throw error;
		}
	};

	const iniciarSesionSupa = async (email, password) => {
		try {
			const { data, error } = await supabaseConexion.auth.signInWithPassword({
				email: email,
				password: password,
				/**
				 *  No es necesario especificar la ruta de redirección
				 *  ya que se encuentra especificada en el servidor.
				 *  Es posible indicar una redirección diferente desde aquí si
				 *  el diseño de la aplicación así lo requiere.
				 * */
				options: {
					emailRedirectTo: "http://localhost:5173/",
				},
			});
			if (error) {
				throw error;
			}
			console.log(data);
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

	return (crearCuentaSupa, iniciarSesionSupa, cerrarSesionSupa);
};
export default useSupabase;
