import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConexion } from "../supabase/supabase.js";
import useSupabase from "../hooks/useSupabase.js";

const contextoSesion = createContext();

const ProveederSesion = ({ children }) => {
	const { crearCuenta } = useSupabase;
	const sesionInicial = {
		email: "",
		password: "",
	};

	const navegar = useNavigate();

	const [datosSesion, setDatosSesion] = useState(sesionInicial);
	const [usuario, setUsuario] = useState({});
	const [errorUsuario, setErrorUsuario] = useState("");
	const [sesionIniciada, setSesionIniciada] = useState(false);

	// está en el useSupabase, modificarlo
	/* const crearCuenta = async () => {
		try {
			const { data, error } = await supabaseConexion.auth.signUp({
				email: datosSesion.email,
				password: datosSesion.password,
			});

			if (error) {
				throw error;
			} else {
				setErrorUsuario(
					"Recibirás por correo electrónico la verificación de la cuenta.",
				);
			}
			console.log(data);
		} catch (error) {
			setErrorUsuario(error.message);
		}
	}; */

	return <div>ProveederSesion</div>;
};

export default ProveederSesion;
