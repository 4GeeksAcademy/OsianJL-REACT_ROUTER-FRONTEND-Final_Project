import React, { useEffect, useState, useSyncExternalStore } from "react";
import "../../styles/home.css";
import { PeopleComp } from "./peoplecomp";
import { PlanetsComp } from "./planetscomp";
import { StarshipsComp } from "./starshipscomp";


export const Home = () => {

	return (
		<div className="base container-fluid bg-dark">
			<h2 className="card-boot ms-4 mt-4">Characters</h2>
			<div className="underline"></div>
			<PeopleComp />
			<h2 className="card-boot ms-4">Planets</h2>
			<div className="underline"></div>
			<PlanetsComp/>
			<h2 className="card-boot ms-4">Starships</h2>
			<div className="underline"></div>
			<StarshipsComp/>
		</div>
	);
};
