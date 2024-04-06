import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const imagePlanetsUrls = [
	"https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg?region=165%2C0%2C949%2C534",
	"https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720",
	"https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675",
	"https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711",
	"https://lumiere-a.akamaihd.net/v1/images/databank_cloudcity_01_169_e589ba2c.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/coruscant-main_59b865a4.jpeg?region=164%2C0%2C953%2C536",
	"https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542",
];

export const Planets = () => {
	const {id} = useParams();
	const { store, actions } = useContext(Context);
	

		useEffect(() => {
		actions.getPlanetsFeatures(id);

	}, []);
	console.log(store.planetsFeatures);

	const storePlanets = store.planetsFeatures; 

	return (
		<div className="container">
			<div className="card mb-3" style={{ width: "1100px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img style={{ width: "600px", height: "250px" }} src={imagePlanetsUrls[id-7]} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{storePlanets.name}</h5>
							<p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
							 Totam, tempora, porro ipsa sed quo autem illo reiciendis dolores repudiandae, modi
							  laborum ex id eum officiis! Excepturi modi assumenda incidunt eum.Lorem ipsum dolor 
							  sit amet consectetur adipisicing elit. Totam, tempora, porro ipsa sed quo autem illo 
							  reiciendis dolores repudiandae, modi laborum ex id eum officiis! Excepturi modi assumenda 
							  incidunt eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
							 Totam, tempora, porro ipsa sed quo autem illo reiciendis dolores repudiandae, modi
							  laborum ex id eum officiis! Excepturi modi assumenda incidunt eum  </p>
							
						</div>
						
					</div>
					<div className="red-line mt-3"></div>
					<div className="mini-container d-flex justify-content-evenly mt-3">
						<div><h3>Name</h3><p>{storePlanets.name}</p></div>
						<div><h3>Climate</h3><p>{storePlanets.climate}</p></div>
						<div><h3>Population</h3><p>{storePlanets.population}</p></div>
						<div><h3>Orbital Period</h3><p>{storePlanets.orbital_period}</p></div>
						<div><h3>Rotation Period</h3><p>{storePlanets.rotation_period}</p></div>
						<div><h3>Diameter</h3><p>{storePlanets.diameter}</p></div>
					</div>
				</div>
			</div>
			<div className="footer__card">
			<Link to="/">
				<button className="btn btn-secondary">Back home</button>
			</Link>
				<button className="btn btn-secondary me-3" onClick={() => actions.addFavouritePlanet(storePlanets.id)}>Add to Favorites</button>
				</div>
		</div>
	);
};
