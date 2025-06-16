import React from 'react';
import ProductCard from '../components/productcard';
import "../assets/styles/kits.css";

function Kits() {
  const productData = [
    { title: "Gavi Customed Shirt", price: "1850", image: "images/bestseller1.jpg", alt: "Home Jersey 2023/24", category: "jersey" },
    { title: "Messi Customed Shirt", price: "1750", image: "images/bestseller2.jpg", alt: "Away Jersey 2023/24", category: "jersey" },
    { title: "CAT Shirt", price: "1650", image: "images/bestseller3.jpg", alt: "Training Kit", category: "jersey" },
    { title: "Customed Shirt", price: "1550", image: "images/bestseller4.jpg", alt: "Official Match Ball", category: "jersey" },
    { title: "Customed Shirt", price: "1450", image: "images/bestseller5.jpg", alt: "Official Match Ball", category: "jersey" },
    { title: "Yamal Customed Shirt", price: "1350", image: "images/bestseller6.jpg", alt: "Official Match Ball", category: "jersey" },
    { title: "Shirt", price: "1250", image: "images/bestseller7.jpg", alt: "Home Jersey 2023/24", category: "jersey" },
    { title: "Shirt", price: "1150", image: "images/bestseller8.jpg", alt: "Away Jersey 2023/24", category: "jersey" },
    { title: "Bracelate", price: "1456", image: "images/access12.jpg", alt: "Training Kit", category: "accessories" },
    { title: "Jersey", price: "1950", image: "images/access14.jpg", alt: "Official Match Ball", category: "jersey" },
    { title: "Water Bottle", price: "1550", image: "images/access18.jpg", alt: "Official Match Ball", category: "accessories" },
    { title: "FC Barcelona Stadium", price: "1250", image: "images/access6.jpg", alt: "Official Match Ball", category: "accessories" },
    { title: "FC Barcelona Collection", price: "1949", image: "images/access9.jpg", alt: "Official Match Ball", category: "accessories" },
    { title: "FC Barcelona Stadium", price: "1109", image: "images/access8.jpg", alt: "Official Match Ball", category: "accessories" },
    { title: "Official Match Ball", price: "1850", image: "images/ball.jpg", alt: "Official Match Ball", category: "accessories" },
  ];

  return (
    <main>
      <section className="bestseller">
        <h2>Bestsellers</h2>
      </section>

      <section className="featured-products">
        <div className="filter-controls">
          <div className="price-filter">
            <label>Price Range:</label>
            <input type="range" min="0" max="2000" defaultValue="2000" className="price-slider" />
            <span className="price-range">ETB 0 - 2000</span>
          </div>           
        </div>

        <div className="products-grid">
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              price={product.price}
              image={product.image}
              alt={product.alt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Kits;
