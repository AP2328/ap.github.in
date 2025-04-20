<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Myntra Clone</title>
  <style>
    /* Add your CSS styling here */
    body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
    header { background-color: #fff; padding: 10px 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #ccc; }
    nav a { margin: 0 10px; text-decoration: none; color: #333; }
    .search-bar { flex: 1; margin: 0 20px; }
    .search-bar input { width: 100%; padding: 5px; }
    .banner { width: 100%; height: 300px; background: url('banner.jpg') center/cover no-repeat; }
    .categories { display: flex; justify-content: space-around; padding: 20px; }
    .category { text-align: center; }
    .category img { width: 100px; height: 100px; }
    footer { background-color: #f2f2f2; text-align: center; padding: 10px; }
  </style>
</head>
<body>
  <header>
    <div class="logo"><img src="logo.png" alt="Myntra Logo" height="40"/></div>
    <nav>
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">Kids</a>
      <a href="#">Home & Living</a>
      <a href="#">Beauty</a>
    </nav>
    <div class="search-bar">
      <input type="text" placeholder="Search for products, brands and more"/>
    </div>
    <div class="icons">
      <a href="#">Profile</a>
      <a href="#">Wishlist</a>
      <a href="#">Bag</a>
    </div>
  </header>
  <div class="banner"></div>
  <section class="categories">
    <div class="category">
      <img src="men.jpg" alt="Men"/>
      <p>Men</p>
    </div>
    <div class="category">
      <img src="women.jpg" alt="Women"/>
      <p>Women</p>
    </div>
    <div class="category">
      <img src="kids.jpg" alt="Kids"/>
      <p>Kids</p>
    </div>
    <!-- Add more categories as needed -->
  </section>
  <footer>
    <p>&copy; 2025 Myntra Clone. All rights reserved.</p>
  </footer>
</body>
</html>
