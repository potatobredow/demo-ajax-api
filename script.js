
// Get the HTML elements
const loadAllButton = document.getElementById("loadAllProducts");
const loadLipstickButton = document.getElementById("loadLipstick");
const productList = document.getElementById("productList");

// API URL
const apiURL = "https://koreemc.github.io/demo-ajax-api/";


// FUNCTION 1: Load all products
loadAllButton.addEventListener("click", function() {

    // Display loading message
    productList.textContent = "Loading all products...";

    // Send AJAX GET request
    fetch(apiURL + "products.json")

        .then(response => {

            if (!response.ok) {
                throw new Error("Unable to retrieve products.");
            }

            return response.json();

        })

        .then(products => {

            // Clear the product container
            productList.innerHTML = "";

            // Loop through all products
            products.forEach(product => {

                displayProduct(product);

            });

        })

        .catch(error => {

            console.error(error);
            productList.textContent = "Error loading products.";

        });

});


// FUNCTION 2: Load only the lipstick
loadLipstickButton.addEventListener("click", function() {

    // Display loading message
    productList.textContent = "Loading lipstick...";

    // Send AJAX GET request for product ID 4 for eyeshadow
    fetch(apiURL + "oneproduct.json")

        .then(response => {

            if (!response.ok) {
                throw new Error("Product not found.");
            }
            return response.json();

        })

        .then(product => {

            // Clear the product container
            productList.innerHTML = "";

            // Display the single product
            displayProduct(product);

        })

        .catch(error => {

            console.error(error);
            productList.textContent = "Error loading lipstick.";

        });

});


// FUNCTION 3: Display a product
function displayProduct(product) {

    // Create product card
    const card = document.createElement("div");

    card.className = "product-card";

    // Add product information
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <p class="price">
            ₱${product.price.toFixed(2)}
        </p>
    `;

    // Add card to the webpage
    productList.appendChild(card);

}
