import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cabecera from "./estructura/Cabecera.jsx";
import Menu from "./estructura/Menu.jsx";
import Contenido from "./estructura/Contenido.jsx";
import Rutas from "./routes/Rutas.jsx";
import Pie from "./estructura/Pie.jsx";
import Notificaciones from "./estructura/Notificaciones.jsx";
import ProveedorProductos from "./contexts/ProveedorProductos.jsx";
import ProveedorListas from "./contexts/ProveedorListas.jsx";

/* 
-- 1. Función que se ejecutará al crear un usuario
create or replace function public.handle_new_user()
returns trigger as $$
begin
  -- Insertar en la tabla ROLES (por defecto 'usuario')
  insert into public.roles (id_rol, email, rol)
  values (new.id, new.email, 'usuario');

  -- Insertar en la tabla PERFILES (inicialmente vacío o con datos básicos)
  insert into public.perfiles (id, nombre)
  values (new.id, new.raw_user_meta_data->>'full_name');

  return new;
end;
$$ language plpgsql security definer;

-- 2. El Trigger (Disparador) que llama a la función anterior
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();	
*/

function App() {
	return (
		<>
			<Cabecera />
			<Menu />
			<Notificaciones />
			<ProveedorProductos>
				<ProveedorListas>
					<Contenido>
						<Rutas />
					</Contenido>
				</ProveedorListas>
			</ProveedorProductos>
			<Pie />
		</>
	);
}

export default App;
