import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";
import { Context } from "../store/appContext"
import starwarsyellow from '../../img/starwarslogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";


export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	console.log(store.auth)

	console.log(store.favourites);

	console.log(store.counter);

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/login")
	}

	return (

		<nav class="navbar bg-dark border-bottom border-body p-0" data-bs-theme="dark">
			<div className="container-fluid p-0">
				<Link to={"/"} style={{ textDecoration: 'none', color: "white"}} >
					<img src={starwarsyellow} alt="Logo" style={{ width: "180px", height: "90px" }} className="d-inline-block align-text-center" />
					<span className="navbar-brand ms-5">Home</span>
					{store.auth ? <div className="d-inline-block align-text-center"><Link to={"/favorites"} style={{ textDecoration: 'none', color: "white"}}>
						<span className="navbar-brand ms-5">Your Favorites</span>
					</Link></div> : null}
				</Link>
				<div className="d-inline-block align-text-center">
					<Link to={"/login"} style={{ textDecoration: 'none', textAlign: "center" }}>
						<span className="login-link">Log In</span>
					</Link>
					<span className="login-link" onClick={handleLogout}>Log Out</span>
				</div>
			</div>
		</nav>



		// 		
		// 		
		// 		
		// 		



	);
};
