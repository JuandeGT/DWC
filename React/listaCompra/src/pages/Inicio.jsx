import React from "react";
import { Link } from "react-router-dom";
import "./Inicio.css";

const Inicio = () => {
	return (
		<div id="inicio-suplementos">
			<section className="hero-banner">
				<div className="hero-content">
					<span className="badge-nuevo">NUEVA COLECCIÓN</span>
					<h1>
						Lleva tu entrenamiento <br />
						<span className="text-highlight">al siguiente nivel</span>
					</h1>
					<p>
						La mejor selección de proteínas, creatina y pre-entrenos. Organiza
						tu suplementación y calcula tus macros con nosotros.
					</p>
					<div className="cta-group">
						<Link to="/listado-productos" className="btn-primary">
							Ver Catálogo
						</Link>
						<Link to="/registrarse" className="btn-secondary">
							Unirme al Club
						</Link>
					</div>
				</div>
			</section>

			<section className="categorias-section">
				<h2>¿Qué necesitas hoy?</h2>
				<div className="grid-categorias">
					<div className="card-categoria">
						<div className="icon">💪</div>
						<h3>Proteínas (Whey)</h3>
						<p>
							Aísla, concentrada o hidrolizada. Recupera tus músculos después
							del entreno.
						</p>
					</div>
					<div className="card-categoria">
						<div className="icon">⚡</div>
						<h3>Creatina Monohidrato</h3>
						<p>
							Aumenta tu fuerza y rendimiento explosivo. El suplemento con más
							evidencia.
						</p>
					</div>
					<div className="card-categoria">
						<div className="icon">🔥</div>
						<h3>Pre-Entrenos</h3>
						<p>
							Energía y foco mental para esos días en los que necesitas un
							empujón extra.
						</p>
					</div>
					<div className="card-categoria">
						<div className="icon">💊</div>
						<h3>Multivitamínicos</h3>
						<p>
							Salud general y sistema inmune fuerte para no fallar ni un día al
							gym.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Inicio;
