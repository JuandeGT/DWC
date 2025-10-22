import React from "react";
import Contenedor from "./components/Contenedor.jsx";
import Interprete from "./components/Interprete.jsx";
import Pelicula from "./components/Pelicula.jsx";
import Listado from "./components/Practica3.08/Listado.jsx";
import ContadorLimite from "./components/Practica3.08/ContadorLimite.jsx";
import ContadorLikes from "./components/Practica3.08/ContadorLikes.jsx";
import Matricula from "./components/Practica3.09/Matricula.jsx";
import "./App.css";

function App() {
	return (
		<>
			<Contenedor>
				<Pelicula
					titulo="Grown Ups"
					direccion="Lago Chebacco en Massachusetts"
					cartela="https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Grownupsmovie.jpg/250px-Grownupsmovie.jpg"
					descripcion="La muerte de su entrenador de baloncesto durante su infancia provoca
					la reunión de algunos viejos amigos, quienes se ven en el lugar en el
					que celebraron un campeonato años atrás. Los compañeros hablan sobre
					sus esposas y sus hijos, y descubren que la edad no necesariamente va
					de la mano con la madurez."
					taquilla="1000000"
				>
					<Interprete nombre="Adam Sandler" foto="">
						Adam Sandler es un actor, comediante y productor estadounidense
						nacido en 1966 en Brooklyn, Nueva York. Se hizo conocido en el
						programa de televisión Saturday Night Live antes de protagonizar una
						gran cantidad de películas de éxito, como Happy Gilmore, Un papá
						genial y The Waterboy, fundando también su productora, Happy Madison
						Productions.
					</Interprete>
					<Interprete nombre="Kevin James" foto="">
						Kevin James es un actor y comediante estadounidense conocido por su
						papel de Doug Heffernan en la serie The King of Queens y de Paul
						Blart en la película Héroe de centro comercial.
					</Interprete>
					<Interprete nombre="Chris Rock" foto="">
						Chris Rock nació en Andrews, Carolina del Sur, el 7 de febrero de
						1965. Es un aclamado comediante, actor y director, conocido por su
						sátira social y política en espectáculos de stand-up, así como por
						su participación en programas como Saturday Night Live y películas
						de comedia y acción.
					</Interprete>
				</Pelicula>
			</Contenedor>
		</>
	);
}

export default App;
