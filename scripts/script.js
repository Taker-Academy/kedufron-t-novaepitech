// URL de l'API
const apiUrl = 'https://api.kedufront.juniortaker.com/';

var buttonColors = ['lightyellow', 'pink', 'lightgreen'];
var previousColor = null;

fetch(`${apiUrl}item/`)
	.then(response => response.json())
	.then(items => {
		let cards_details = document.querySelectorAll('.product-details');
		let cards = document.querySelectorAll('.product');
		items.forEach((item, index) => {
			let card_details = cards_details[index];
			let card = cards[index];

			const img = document.createElement('img');
			img.src = `${apiUrl}item/picture/${item.image}`;
			card_details.appendChild(img);

			const name = document.createElement('h1');
			name.textContent = item.name;
			card_details.appendChild(name);

			const price = document.createElement('h2');
			price.textContent = item.price + ' €';
			card_details.appendChild(price);

			const addToCart = document.createElement('button');
			if (item.name != 'Capibarou' && item.name != 'Dromaderou')
				addToCart.textContent = 'Ajouter au panier';
			else {
				addToCart.textContent = 'En rupture de stock';
				addToCart.style.opacity = 0.5;
			}
			card.appendChild(addToCart);

			var randomColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];

			while (randomColor === previousColor)
				randomColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];

			previousColor = randomColor;

			addToCart.classList.add(randomColor);
		});
	})
	.catch(error => console.error('Erreur:', error));

// Footer

var footerColors = ['#fffcaf', 'pink', 'lightgreen'];
var randomColor = footerColors[Math.floor(Math.random() * footerColors.length)];

document.querySelector('footer').style.backgroundColor = randomColor;
