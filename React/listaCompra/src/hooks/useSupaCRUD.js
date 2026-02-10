import { useState } from "react";
import { supabaseConexion } from "../supabase/supabase.js";

const useSupaCRUD = (tabla) => {
	const [cargando, setCargando] = useState(false);

	const consulta = async (promesa) => {
		try {
			setCargando(true);
			const { data, error } = await promesa;
			if (error) throw error;
			return data;
		} catch (error) {
			throw error;
		} finally {
			setCargando(false);
		}
	};

	const obtenerSupa = async () => {
		return await consulta(supabaseConexion.from(tabla).select("*"));
	};

	const obtenerColumnaSupa = async (columna, valor) => {
		return await consulta(
			supabaseConexion.from(tabla).select("*").eq(columna, valor),
		);
	};

	const obtenerMultitabla = async (nombreColumna, valorColumna, sentencia) => {
		return await consulta(
			supabaseConexion
				.from(tabla)
				.select(sentencia)
				.eq(nombreColumna, valorColumna),
		);
	};

	const crearSupa = async (datos) => {
		await consulta(supabaseConexion.from(tabla).insert(datos));
	};

	const editarSupa = async (datos) => {
		await consulta(
			supabaseConexion.from(tabla).update(datos).eq("id", datos.id),
		);
	};

	const eliminarSupa = async (id) => {
		await consulta(supabaseConexion.from(tabla).delete().eq("id", id));
	};

	return {
		cargando,
		obtenerSupa,
		obtenerColumnaSupa,
		obtenerMultitabla,
		crearSupa,
		editarSupa,
		eliminarSupa,
	};
};

export default useSupaCRUD;
