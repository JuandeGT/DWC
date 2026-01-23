import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabaseConexion } from "../supabase/supabase.js";
import useSupabase from "../hooks/useSupabase.js";

const contextoSesion = createContext();

const ProveederSesion = ({ children }) => {
	const { crearCuentaSupa, iniciarSesionSupa, cerrarSesionSupa } = useSupabase;

	const sesionInicial = {
		email: "",
		password: "",
	};

	const navegar = useNavigate();

	const [datosSesion, setDatosSesion] = useState(sesionInicial);
	const [usuario, setUsuario] = useState({});
	const [errorUsuario, setErrorUsuario] = useState("");
	const [sesionIniciada, setSesionIniciada] = useState(false);

	const crearCuenta = async () => {
		setErrorUsuario("");
		try {
			crearCuentaSupa(datosSesion.email, datosSesion.password);
		} catch (error) {
			setErrorUsuario(error.message);
		}
		setErrorUsuario(
			"Recibirás por correo electrónico la verificación de la cuenta.",
		);
	};

	const iniciarSesion = async () => {
		setErrorUsuario("");
		try {
			iniciarSesionSupa(datosSesion.email, datosSesion.password);
		} catch (error) {
			setErrorUsuario(error.message);
		}
	};

	const cerrarSesion = async () => {
		setErrorUsuario("");
		try {
			await cerrarSesionSupa;
			// Se redirige al usuario a la parte pública.
			navegar("/");
		} catch (error) {
			setErrorUsuario(error.message);
		}
	};

	return <div>ProveederSesion</div>;
};

export default ProveederSesion;
