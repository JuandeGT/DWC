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
create or replace function public.insertar_usuario()
returns trigger as $$
begin
  -- Insertar en la tabla ROLES (por defecto 'usuario')
  insert into public.roles (id_rol, email, rol)
  values (new.id, new.email, 'usuario');

  -- Insertar en la tabla PERFILES (inicialmente vacío o con datos básicos)
  insert into public.perfiles (id, nombre)
  values (new.id, new.raw_user_meta_data->>'display_name');

  return new;
end;
$$ language plpgsql security definer;

-- 2. El Trigger (Disparador) que llama a la función anterior
create trigger al_crear_usuario
  after insert on auth.users
  for each row execute procedure public.insertar_usuario();

-- 3. La función para comprobar si es adminm
create or replace function public.soy_administrador()
returns boolean as $$
begin
  return exists (
    select 1
    from public.roles
    where id_rol = auth.uid()
    and rol = 'administrador'
  );
end;
$$ language plpgsql security definer set search_path = public;
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
