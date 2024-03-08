const apiUrl = 'https://api.kedufront.juniortaker.com/';

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch(`${apiUrl}item/${productId}`)
	.then(response => response.json())
	.then(data => {
		const item = data.item; // Access the item property of the response
		
		// Create and populate the img element
		const img = document.createElement('img');
		img.src = `${apiUrl}item/picture/${item._id}`; // Access the id from the item object
		document.body.appendChild(img);

		// Create and populate the h1 element
		const name = document.createElement('h1');
		name.textContent = item.name; // Access the name from the item object
		document.body.appendChild(name);

		// Create and populate the p element for price
		const price = document.createElement('p');
		price.textContent = item.price + ' €';
		document.body.appendChild(price);
	})
	.catch(error => console.error('Erreur:', error));
