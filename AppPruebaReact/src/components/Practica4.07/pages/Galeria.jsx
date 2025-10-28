import React from 'react';
import { Outlet } from 'react-router-dom';
import SubMenu from '../estructura/SubMenu';
import './Galeria.css';

const Galeria = () => {
	return (
		<>
			<h1>Galería</h1>
			<SubMenu />
			<Outlet />
		</>
	);
};

export default Galeria;
