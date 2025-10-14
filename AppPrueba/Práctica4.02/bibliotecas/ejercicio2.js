"use strict";

const crearTabla = () => {
	let num = 1;
	document.body.insertAdjacentHTML("beforeend", "<table>");
	for (let i = 0; i < 10; i++) {
		document.body.insertAdjacentHTML("beforeend", "<tr>");
		for (let i = 0; i < 10; i++) {
			document.body.insertAdjacentHTML("beforeend", `<td>${num}</td>`);
			num++;
		}
		document.body.insertAdjacentHTML("beforeend", "</tr>");
	}
	document.body.insertAdjacentHTML("beforeend", "</table>");
};

export { crearTabla };
