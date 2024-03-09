// Get the products from local storage
let products = JSON.parse(localStorage.getItem('products')) || [];

// Display each product
products.forEach((product, index) => {
    // Create a div for the product
    const div = document.createElement('div');

    // Create elements for the product details
    const img = document.createElement('img');
    const name = document.createElement('p');
    const price = document.createElement('p');
    const quantity = document.createElement('p');

    // Set the details
    img.src = product.imageUrl;
    name.textContent = product.name;
    price.textContent = product.price + ' €';
    quantity.textContent = 'Quantity: ' + product.quantity;

    // Create buttons for modifying quantity
    const addButton = document.createElement('button');
    const removeButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    // Set button text
    addButton.textContent = '+';
    removeButton.textContent = '-';
    deleteButton.textContent = 'Retirer';

    // Add event listeners to buttons
    addButton.addEventListener('click', () => {
        product.quantity++;
        quantity.textContent = 'Quantity: ' + product.quantity;
        localStorage.setItem('products', JSON.stringify(products));
    });

    removeButton.addEventListener('click', () => {
        if (product.quantity > 1) {
            product.quantity--;
            quantity.textContent = 'Quantity: ' + product.quantity;
        } else {
            div.remove();
            products.splice(index, 1);
        }
        localStorage.setItem('products', JSON.stringify(products));
    });

    deleteButton.addEventListener('click', () => {
        div.remove();
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
    });

    // Add the details and buttons to the div
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(quantity);
    div.appendChild(addButton);
    div.appendChild(removeButton);
    div.appendChild(deleteButton);

    // Add the div to the page
    document.getElementById('cart-items').appendChild(div);
});
