import React from 'react';
import ProductCard from '../components/productcard';
import "../assets/styles/training.css";

function Training() {
  const trainingProducts = [
    { title: "Training Shirt 2023",    price: "1,200",      image: "images/training1.jpg",      alt: "Training Shirt 2023",      category: "training"    },
    { title: "Winter Jacket",price: "2,000", image: "images/training2.jpg", alt: "Winter Jacket", category: "training"  },
    { title: "Track Pants", price: "950",image: "images/training3.jpg",  alt: "Track Pants", category: "training"  },
    { title: "Training Top",price: "1,100",image: "images/training4.jpg", alt: "Training Top", category: "training" },
    { title: "Sleeveless Training Tee", price: "800", image: "images/training5.jpg", alt: "Sleeveless Training Tee", category: "training"  },
  ];

  return (
    <main>
      <section className="training">
        <h2>Training Wear</h2>
      </section>

      <section className="featured-products">
        <div className="products-grid">
          {trainingProducts.map((product, index) => (
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

export default Training;
