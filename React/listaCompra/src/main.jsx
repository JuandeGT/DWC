import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProveerNotificaciones from "./contexts/ProveerNotificaciones.jsx";
import ProveedorSesion from "./contexts/ProveedorSesion.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<ProveerNotificaciones>
				<ProveedorSesion>
					<App />
				</ProveedorSesion>
			</ProveerNotificaciones>
		</BrowserRouter>
	</StrictMode>,
);
