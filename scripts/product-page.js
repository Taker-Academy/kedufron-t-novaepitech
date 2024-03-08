const apiUrl = 'https://api.kedufront.juniortaker.com/';
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
var buttonColors = ['lightyellow', 'pink', 'lightgreen'];
var previousColor = null;

fetch(`${apiUrl}item/${productId}`)
	.then(response => response.json())
	.then(data => {
		const item = data.item;
		
		let image_container = document.querySelector('.product-image-container');
		const img = document.createElement('img');
		img.src = `${apiUrl}item/picture/${item._id}`;
		image_container.appendChild(img);

		let details_container = document.querySelector('.product-details-container');
		const name = document.createElement('h1');
		name.textContent = item.name;
		details_container.appendChild(name);

		const price = document.createElement('p');
		price.textContent = item.price + ' €';
		details_container.appendChild(price);

		let add_to_cart_container = document.createElement('div');
		add_to_cart_container.classList.add('add-to-cart-container');
		details_container.appendChild(add_to_cart_container);

		const counterContainer = document.createElement('div');
		const decrementButton = document.createElement('button');
		const incrementButton = document.createElement('button');
		const countDisplay = document.createElement('span');

		let count = 1;

		decrementButton.textContent = '-';
		incrementButton.textContent = '+';
		countDisplay.textContent = count;

		decrementButton.addEventListener('click', () => {
			if (count > 1) {
				count--;
				countDisplay.textContent = count;
			}
		});

		incrementButton.addEventListener('click', () => {
			count++;
			countDisplay.textContent = count;
		});

		counterContainer.appendChild(decrementButton);
		counterContainer.appendChild(countDisplay);
		counterContainer.appendChild(incrementButton);
		add_to_cart_container.appendChild(counterContainer);
		counterContainer.classList.add('counter-container');

		const addToCart = document.createElement('button');
		addToCart.textContent = 'Ajouter au panier';
		add_to_cart_container.appendChild(addToCart);

		addToCart.addEventListener('click', () => {
			localStorage.setItem(`product_${item._id}_count`, count);
			console.log(`Product ${item._id} count: ${count}`);
		});

		var randomColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];

		while (randomColor === previousColor)
			randomColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];

		previousColor = randomColor;

		addToCart.classList.add(randomColor);
	})
	.catch(error => console.error('Erreur:', error));
