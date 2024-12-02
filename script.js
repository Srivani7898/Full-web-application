const products = [
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 30 },
    { id: 3, name: 'Product C', price: 20 },
  ];
  
  const cart = [];
  
  function displayProducts() {
    const productContainer = document.querySelector('.product-list');
    products.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productContainer.appendChild(productDiv);
    });
  }
  
  function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    cartItems.innerHTML = '';
    let totalPrice = 0;
  
    cart.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
      totalPrice += item.price;
    });
  
    total.textContent = `Total: $${totalPrice}`;
  }
  
  document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Checkout successful!');
    cart.length = 0;
    updateCart();
  });
  
  displayProducts();
  