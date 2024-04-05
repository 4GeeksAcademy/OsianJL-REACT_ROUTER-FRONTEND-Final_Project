const getState = ({ getStore, getActions, setStore }) => {


	return {

		store: {
			people: [],
			planets: [],
			starships: [],

			peopleFeatures: {},
		    planetsFeatures: {},
			starshipsFeatures: {},

			favourites: [],
			// counter: 0,
			auth: false
		},
		
		actions: {

			addFavouritePlanet :async (id)=>{
				let token = localStorage.getItem("token")
				try {
					const response = await fetch(`https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/favorites/planet/${id}`, 
					
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						},

					})
					const data = await response.json()
					console.log(data.results)
					if (response.status == 200) {
						setStore({ favourites: data.results })
					}
					
					return true;

				}	catch (error) {
					return false; 
				}
			},

			addFavouriteCharacter :async (id)=>{
				let token = localStorage.getItem("token")
				try {
					const response = await fetch(`https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/favorites/character/${id}`, 
					
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						},

					})
					const data = await response.json()
					console.log(data.results)
					if (response.status == 200) {
						setStore({ favourites: data.results })
					}
					
					return true;

				}	catch (error) {
					return false; 
				}
			},
	
			addFavouriteStarship :async (id)=>{
				let token = localStorage.getItem("token")
				try {
					const response = await fetch(`https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/favorites/starship/${id}`, 
					
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						},

					})
					const data = await response.json()
					console.log(data.results)
					if (response.status == 200) {
						setStore({ favourites: data.results })
					}
					
					return true;

				}	catch (error) {
					return false; 
				}
			},

			getFavorites: async () => {
				let token = localStorage.getItem("token")
				try  {
					const response = await fetch("https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/user/favorites", 
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						},

					})
					const data = await response.json()
					console.log(data.results)
					if (response.status == 200) {
						setStore({ favourites: data.results })
					}
					
					return true;
				}	catch (error) {
					return false; 
				}




			},

			deleteFavourite: async (id) => {
				let token = localStorage.getItem("token")
				try {
					const response = await fetch(`https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/favorites/${id}`, 
					{
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						},

					})
					const data = await response.json()
					console.log(data)
					if (response.status == 200) return true;

				} catch (error) {
					return false; 
				}
			},


			getPeople: () => {
					fetch("https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/all_characters")
						.then(res => res.json())
						.then(data => setStore({ people: data.results }))
						.catch(err => console.error(err))
			},

			 getPeopleFeatures: (id) => {
			 	
			 	fetch(`https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/characters/${id}`)
			.then(res => res.json())
			.then(data => setStore({ peopleFeatures: data.results }))
			// .then(data => console.log(data))
			.catch(err => console.error(err))}, 




			getPlanets: () => {

				fetch("https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/all_planets")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))

			},

			getPlanetsFeatures: (id) => {
			 	
				fetch(`https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/planets/${id}`)
		   .then(res => res.json())
		   .then(data => setStore({ planetsFeatures: data.results }))
		   .catch(err => console.error(err))}, 


			getStarships: () => {

				fetch("https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/all_starships")
					.then(res => res.json())
					.then(data => setStore({ starships: data.results }))
					.catch(err => console.error(err))

			},

			getStarshipsFeatures: (id) => {
			 	
				fetch(`https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/starships/${id}`)
		   .then(res => res.json())
		   .then(data => setStore({ starshipsFeatures: data.results }))
		   .catch(err => console.error(err))}, 


			login: async (email, password) => {
				try  {
					const response = await fetch("https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/login", 
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email,
							"password": password
						})

					})
					const data = await response.json()
					if (response.status == 200) {
						localStorage.setItem("token", data.access_token)
						console.log(data)
						return true;
					}
					else {
						return false;
					}
				}	catch (error) {
					return false; 
				}




			},
			
			signUp: async (firstName, lastName,email, password) => {
				try  {
					const response = await fetch("https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/signup", 
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"first_name": firstName,
							"last_name": lastName,
							"email": email,
							"password": password
						})

					})
					const data = await response.json()
					if (response.status == 200) {
						// localStorage.setItem("token", data.access_token)
					}
					console.log(data)
					return true;
				}	catch (error) {
					return false; 
				}




			},
 
			validToken: async () => {
				let token = localStorage.getItem("token")
				try  {
					const response = await fetch("https://vigilant-doodle-9777j7j7q6wwh6qg-3000.app.github.dev/valid-token", 
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						}

					})
					let data = await response.json()
					console.log(data)
					if (response.status == 200) {
						setStore({auth: data.is_logged})
					}
					console.log(data)
					
				}	catch (error) {
					console.log(error); 
				}




			},
 
		


		}
	};

};

export default getState;
