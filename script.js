// URL de l'API
const apiUrl = 'https://api.kedufront.juniortaker.com/';

// // Récupération de tous les items
// fetch(`${apiUrl}item/`)
// 	.then(response => response.json())
// 	.then(items => {
// 		items.forEach(item => {
// 			let imageDiv = document.querySelector('.articleImages');
// 			// Création d'une balise img pour chaque item
// 			const img = document.createElement('img');
// 			img.src = `${apiUrl}item/picture/${item.image}`;
// 			imageDiv.appendChild(img);

// 			// Création d'une balise p pour le nom de chaque item
			// const name = document.createElement('p');
			// name.textContent = item.name;
			// imageDiv.appendChild(name);

// 			const description = document.createElement('p');
// 			description.textContent = item.description;
// 			imageDiv.appendChild(description);

			// const price = document.createElement('p');
			// price.textContent = item.price;
			// imageDiv.appendChild(price);
// 		});
// 	})
// 	.catch(error => console.error('Erreur:', error));

// Loved plushies section

// item 2 à 4
fetch(`${apiUrl}item/`)
	.then(response => response.json())
	.then(items => {
		// Select all the cards
		let cards = document.querySelectorAll('.product');
		items.forEach((item, index) => {
			// Use the index to get the corresponding card
			let card = cards[index];
			// Création d'une balise img pour chaque item
			const img = document.createElement('img');
			img.src = `${apiUrl}item/picture/${item.image}`;
			card.appendChild(img);

			const name = document.createElement('p');
			name.textContent = item.name;
			card.appendChild(name);

			const price = document.createElement('p');
			price.textContent = item.price + ' €';
			card.appendChild(price);

			const addToCart = document.createElement('button');
			if (index <= 3) {
				addToCart.textContent = 'Ajouter au panier';
			} else {
				addToCart.textContent = 'En rupture de stock';
			}
			card.appendChild(addToCart);
		});
	})
	.catch(error => console.error('Erreur:', error));
