import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const imagePeopleUrls = [
	"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",
	"https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720",
	"https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786",
	"https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
	"https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536",
	"https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593",
	"https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527",
	"https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666",
	"https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878",
	"https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721",
]

export const People = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPeopleFeatures(id);

	}, []);
	console.log(store.peopleFeatures);

	const storePeople = store.peopleFeatures;



	return (
		<div className="container">
			<div className="card mb-3" style={{ width: "1100px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img style={{ width: "600px", height: "250px" }} src={imagePeopleUrls[id - 5]} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{storePeople.name}</h5>
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
						<div><h3>Height</h3><p>{storePeople.height}</p></div>
						<div><h3>Mass</h3><p>{storePeople.mass}</p></div>
						<div><h3>Hair Color</h3><p>{storePeople.hair_color}</p></div>
						<div><h3>Eye Color</h3><p>{storePeople.eye_color}</p></div>
						<div><h3>Gender</h3><p>{storePeople.gender}</p></div>
						<div><h3>Birth year</h3><p>{storePeople.birth_year}</p></div>
					</div>
				</div>
			</div>
			<div className="footer__card">
			<Link to="/">
				<button className="btn btn-secondary">Back home</button>
			</Link>
				<button className="btn btn-secondary me-3" onClick={() => actions.addFavouriteCharacter(storePeople.id)}>Add to Favorites</button>
				</div>
		</div>
	);
};
