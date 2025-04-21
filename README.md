<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shopping Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar">
    <div class="logo">ShopEasy</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Men</a></li>
      <li><a href="#">Women</a></li>
      <li><a href="#">Kids</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <input type="text" placeholder="Search for products..." class="search-bar">
  </nav>

  <!-- Banner -->
  <section class="banner">
    <img src="https://via.placeholder.com/1200x400" alt="Shop Banner">
  </section>

  <!-- Product Carousel -->
  <section class="carousel-section">
    <h2>Featured Products</h2>
    <div class="carousel-container">
      <button class="carousel-btn left-btn" id="leftBtn">&#8592;</button>
      <div class="carousel" id="carousel">
        <div class="product">Product 1</div>
        <div class="product">Product 2</div>
        <div class="product">Product 3</div>
        <div class="product">Product 4</div>
        <div class="product">Product 5</div>
        <div class="product">Product 6</div>
      </div>
      <button class="carousel-btn right-btn" id="rightBtn">&#8594;</button>
    </div>
  </section>

  <!-- Product Grid -->
  <section class="products-grid">
    <h2>New Arrivals</h2>
    <div class="grid-container">
      <div class="product-card">
        <img src="https://via.placeholder.com/200x250" alt="Product 1">
        <h3>Men's T-shirt</h3>
        <p>$25</p>
      </div>
      <div class="product-card">
        <img src="https://via.placeholder.com/200x250" alt="Product 2">
        <h3>Women's Dress</h3>
        <p>$45</p>
      </div>
      <div class="product-card">
        <img src="https://via.placeholder.com/200x250" alt="Product 3">
        <h3>Smart Watch</h3>
        <p>$150</p>
      </div>
      <div class="product-card">
        <img src="https://via.placeholder.com/200x250" alt="Product 4">
        <h3>Kids' Shoes</h3>
        <p>$30</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>© 2025 ShopEasy. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>