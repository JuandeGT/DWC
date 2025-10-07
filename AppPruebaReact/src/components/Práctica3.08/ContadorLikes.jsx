import React, { useState } from 'react';
import './ContadorLikes.css';

const ContadorLikes = () => {
	const valorInicial = 0;

	//Creamos dos estados para que cada uno tenga el suyo propio
	const [likes, setLikes] = useState(valorInicial);

	const [dislikes, setDislikes] = useState(valorInicial);

	const incrementarLikes = (num) => {
		setLikes(num + 1);
	};

	const incrementarDislikes = (num) => {
		setDislikes(num + 1);
	};

	return (
		<>
			<div className="likes_container">
				<h1>Likes y dislikes</h1>
				<button
					onClick={() => {
						incrementarLikes(likes);
					}}
				>
					Likes
				</button>
				<button
					onClick={() => {
						incrementarDislikes(dislikes);
					}}
				>
					Dislikes
				</button>
			</div>
			<div>{likes}</div>
			<div>{dislikes}</div>
		</>
	);
};

export default ContadorLikes;
