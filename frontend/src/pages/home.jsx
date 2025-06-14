// src/pages/Home.jsx

import React from "react";
import "../assets/styles/Home.css";
import ProductCard from "../components/productcard";

import home1 from "../assets/images/home1.webp";
import home2 from "../assets/images/home2.jpg";
import home3 from "../assets/images/home3.jpg";
import home4 from "../assets/images/home4.jpg";
import home5 from "../assets/images/home5.jpg";
import unisex1 from "../assets/images/unisex1.jpg";
import unisex2 from "../assets/images/unisex2.jpg";
import unisex3 from "../assets/images/unisex3.jpg";
import unisex4 from "../assets/images/unisex4.jpg";
import unisex5 from "../assets/images/unisex5.jpg";

function Home() {
  return (
    <main>
      <section className="home_p">
        <p className="main_shopnow">Shop now</p>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>

        <div className="filter-controls">
          {/* Same filters as before */}
        </div>

        <div className="search-container">
          {/* Same search bar as before */}
        </div>

        <div className="products-grid">
          <ProductCard image={home2} title="Jersey" price="1850" />
          <ProductCard image={home1} title="Jersey" price="1219" />
          <ProductCard image={home3} title="Training Kit" price="1650" />
          <ProductCard image={home4} title="Jersey" price="1450" />
          <ProductCard image={home5} title="Jersey" price="1350" />
        </div>
      </section>

      <section className="unix_coll">
        <h2>Unisex Collection</h2>
        <p className="main_shopnow">Shop now</p>
      </section>

      <section className="new_arrivals">
        <h2>New Arrivals</h2>
        <div className="products-grid">
          <ProductCard image={unisex1} title="Home Jersey 2024" price="1750" />
          <ProductCard image={unisex2} title="Kit" price="1550" />
          <ProductCard image={unisex3} title="Jersey" price="1250" />
          <ProductCard image={unisex4} title="Jersey" price="1150" />
          <ProductCard image={unisex5} title="Jersey" price="950" />
        </div>
      </section>

      <section className="club-banner">FC BARCELONA</section>
    </main>
  );
}

export default Home;
