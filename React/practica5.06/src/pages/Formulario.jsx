import React from "react";
import "./Formulario.css";

const Formulario = () => {
	return (
		<>
			<div id="columna">
				<div id="divForm">
					<form id="formulario" name="formulario">
						<h3>Formulario:</h3>
						<hr />
						<label for="nombre">Nombre del disco:</label>
						<input
							type="text"
							id="nombre"
							name="nombre"
							placeholder="Nombre..."
							required
						/>
						<br />
						<label for="caratula">Carátula del disco:</label>
						<input
							type="url"
							id="caratula"
							name="caratula"
							placeholder="URL de la carátula..."
						/>
						<br />
						<label for="musico">Grupo de música o músico:</label>
						<input
							type="text"
							id="musico"
							name="musico"
							placeholder="Crupo o músico..."
						/>
						<br />
						<label for="fecha">Año de publicación:</label>
						<input
							type="number"
							id="fecha"
							name="fecha"
							placeholder="Fecha publicación..."
						/>
						<br />
						<label for="genero">
							<strong>Género:</strong>
						</label>
						<select id="genero" name="genero">
							<option value="">Selecciona el género</option>
							<option value="rock">Rock</option>
							<option value="pop">Pop</option>
							<option value="clasica">Clasica</option>
							<option value="jazz">Jazz</option>
							<option value="electronica">Electronica</option>
						</select>
						<br />
						<label for="localizacion">Localización del disco:</label>
						<input
							type="text"
							id="localizacion"
							name="localizacion"
							placeholder="Localizacion del disco..."
						/>
						<br />
						<label for="prestado">Prestado:</label>
						<input type="checkbox" id="prestado" name="prestado" />
						<br />
						<input type="button" id="botonGuardar" value="Guardar" />
						<input type="button" id="botonMostrar" value="Mostrar" />
					</form>
					<br />
					<br />
					<form id="busqueda" name="busqueda">
						<label for="nomBusqueda">Buscar por nombre:</label>
						<input
							type="text"
							id="nomBusqueda"
							name="nomBusqueda"
							placeholder="Disco a buscar..."
							list="nombresDiscos"
						/>
						<datalist id="nombresDiscos" name="nombresDiscos"></datalist>
						<input type="button" id="botonBuscar" value="Buscar" />
						<input type="button" id="botonLimpiar" value="Limpiar" />
					</form>
				</div>
				<div id="errores"></div>
			</div>
		</>
	);
};

export default Formulario;
