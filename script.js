// URL de l'API
const apiUrl = 'https://api.kedufront.juniortaker.com/';

// Récupération de tous les items
fetch(`${apiUrl}item/`)
	.then(response => response.json())
	.then(items => {
		items.forEach(item => {
			let imageDiv = document.querySelector('.articleImages');
			// Création d'une balise img pour chaque item
			const img = document.createElement('img');
			img.src = `${apiUrl}item/picture/${item.image}`;
			imageDiv.appendChild(img);

			// Création d'une balise p pour le nom de chaque item
			const name = document.createElement('p');
			name.textContent = item.name;
			imageDiv.appendChild(name);

			const description = document.createElement('p');
			description.textContent = item.description;
			imageDiv.appendChild(description);

			const price = document.createElement('p');
			price.textContent = item.price;
			imageDiv.appendChild(price);
		});
	})
	.catch(error => console.error('Erreur:', error));
