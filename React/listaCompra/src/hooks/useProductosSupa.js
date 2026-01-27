import { supabaseConexion } from '../supabase/supabase.js';

const useProductosSupa = () => {
	const obtenerProductosSupa = async () => {
		try {
			const { data, error } = await supabaseConexion.from('productos').select('*');
			if (error) throw error;
			return data;
		} catch (error) {
			throw error;
		}
	};

	return { obtenerProductosSupa };
};

export default useProductosSupa;
