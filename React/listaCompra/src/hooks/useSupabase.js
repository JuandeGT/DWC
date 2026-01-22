const useSupabase = () => {
	const crearCuenta = async (datos) => {
		try {
			if (datos) {
				const { data, error } = await supabaseConexion.auth.signUp({
					email: datos.email,
					password: datos.password,
				});
				console.log(data);
			} else {
				throw new Error("");
			}
		} catch (error) {
			throw error;
		}
	};

	return crearCuenta;
};
export default useSupabase;
