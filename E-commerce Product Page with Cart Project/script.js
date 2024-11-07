let cart = [];

// Function to add a product to the cart
function addToCart() {
    const product = {
        title: "Sample Product",
        price: 29.99,
        quantity: 1
    };

    // Check if product already in cart
    const existingProduct = cart.find(item => item.title === product.title);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Clear previous items

    let total = 0;
    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.title} (x${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    document.getElementById("cart-total").textContent = total.toFixed(2);
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cart[index].quantity -= 1;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}

// Function for checkout (simple alert for now)
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Thank you for your purchase! Total: $${document.getElementById("cart-total").textContent}`);
        cart = [];
        updateCart();
    }
}
