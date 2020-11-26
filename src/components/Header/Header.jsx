import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	return <header className={s.header}>
		<img src="https://upload.wikimedia.org/wikipedia/commons/f/f3/RKN_site_logo.png" />

		<div className={s.loginBlock}>
			{ props.isAuth
				? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
			 : <NavLink to={'/login'}>Login</NavLink> }
		</div>
	</header>
}

export default Header;