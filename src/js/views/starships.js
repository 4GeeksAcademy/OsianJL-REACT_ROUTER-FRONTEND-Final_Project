import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

const imageStarshipsUrls = [
	"https://lumiere-a.akamaihd.net/v1/images/hammerhead-corvette-rogue-update_453ce60b.jpeg?region=154%2C0%2C892%2C502",
	// "https://lumiere-a.akamaihd.net/v1/images/hammerhead-corvette-rogue-update_453ce60b.jpeg?region=154%2C0%2C892%2C502",
	"https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900",
	"https://lumiere-a.akamaihd.net/v1/images/mobile-tac-pod-main_933a2b48.jpeg?region=383%2C40%2C1167%2C657",
	// "https://lumiere-a.akamaihd.net/v1/images/mobile-tac-pod-main_933a2b48.jpeg?region=383%2C40%2C1167%2C657",
	"https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
	// "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
	// "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
	// "https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
	// "https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720",
	// "https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864",
	// "https://lumiere-a.akamaihd.net/v1/images/resistance-x-wing_9433981f.jpeg?region=0%2C0%2C1560%2C878",
	// "https://lumiere-a.akamaihd.net/v1/images/image_3aaf40b1.jpeg?region=0%2C0%2C1920%2C1080",
	// "https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845",
	// "https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845",
	// "https://lumiere-a.akamaihd.net/v1/images/ep8-ff-004996_8ab70142.jpeg?region=0%2C0%2C1280%2C720",
	// "https://lumiere-a.akamaihd.net/v1/images/ep8-ff-004996_8ab70142.jpeg?region=0%2C0%2C1280%2C720",
];


export const Starships = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getStarshipsFeatures(id);

	}, []);
	console.log(store.starshipsFeatures);

	const storeStarships = store.starshipsFeatures;

	return (
		<div className="container">
			<div className="card mb-3" style={{ width: "1100px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img style={{ width: "600px", height: "250px" }} src={imageStarshipsUrls[id - 6]} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{storeStarships.name}</h5>
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
						<div><h3>Model</h3><p>{storeStarships.name}</p></div>
						<div><h3>Manufacturer</h3><p>{storeStarships.manufacturer}</p></div>
						<div><h3>Crew</h3><p>{storeStarships.crew}</p></div>
						<div><h3>Passengers</h3><p>{storeStarships.passengers}</p></div>
						<div><h3>Consumables</h3><p>{storeStarships.consumables}</p></div>
						<div><h3>Cost In Credits</h3><p>{storeStarships.cost_in_credits}</p></div>
					</div>
				</div>
			</div>
			<div className="footer__card">
			<Link to="/">
				<button className="btn btn-secondary">Back home</button>
			</Link>
				<button className="btn btn-secondary me-3" onClick={() => actions.addFavouriteStarship(storeStarships.id)}>Add to Favorites</button>
				</div>
		</div>
	);
};
