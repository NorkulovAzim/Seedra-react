import { useState, useEffect, useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductLeaf from "../assets/product-leaf.svg";
import Bundles from "../assets/bundles.svg";
import Band from "../assets/band.svg";
import Vegetable from "../assets/vegetable.svg";
import Fruits from "../assets/fruits.svg";
import Supplies from "../assets/supplies.svg";
import Flowers from "../assets/flowers.svg";

import Star from "../assets/star.png";
import Cart from "../assets/cart.svg";

const Products = ({ searchTerm = "" }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filteredProducts = useMemo(() => {
    if (searchTerm.trim() === "") {
      return allProducts.slice(0, 12);
    } else {
      return allProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }, [searchTerm, allProducts]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setAllProducts(data.products.slice(0, 20));

        // Simulate network delay to see skeleton loading
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="products-section">
        <div className="container">
          <div className="products-title">
            <h2>Our products.</h2>
            <button>View all</button>
          </div>

          <div className="products-filter">
            <button>
              <img src={ProductLeaf} alt="" />
              All
            </button>
            <button>
              <img src={Bundles} alt="" />
              BUNDLES
            </button>
            <button>
              <img src={Band} alt="" />
              BAND
            </button>
            <button>
              <img src={Vegetable} alt="" />
              VEGETABLES
            </button>
            <button>
              <img src={Fruits} alt="" />
              FRUITS
            </button>
            <button>
              <img src={Supplies} alt="" />
              SUPPLIES
            </button>
            <button>
              <img src={Flowers} alt="" />
              FLOWERS
            </button>
          </div>

          <div className="product-cards">
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="card" key={index}>
                <Skeleton width="100%" height={200} />
                <div className="star">
                  <Skeleton width={60} height={20} />
                  <Skeleton width={40} height={20} />
                </div>
                <Skeleton count={2} />
                <div className="card-price">
                  <Skeleton width={60} height={30} />
                  <Skeleton width={40} height={40} circle={true} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products-section">
        <div className="container">
          <div className="products-title">
            <h2>Our products.</h2>
            <button>View all</button>
          </div>
          <div className="error">
            <p>Error: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="products-section">
      <div className="container">
        <div className="products-title">
          <h2>Our products.</h2>
          <button>View all</button>
        </div>

        <div className="products-filter">
          <button>
            <img src={ProductLeaf} alt="" />
            All
          </button>
          <button>
            <img src={Bundles} alt="" />
            BUNDLES
          </button>
          <button>
            <img src={Band} alt="" />
            BAND
          </button>
          <button>
            <img src={Vegetable} alt="" />
            VEGETABLES
          </button>
          <button>
            <img src={Fruits} alt="" />
            FRUITS
          </button>
          <button>
            <img src={Supplies} alt="" />
            SUPPLIES
          </button>
          <button>
            <img src={Flowers} alt="" />
            FLOWERS
          </button>
        </div>

        <div className="product-cards">
          {filteredProducts.map((product) => (
            <div className="card" key={product.id}>
              <img
                className="product-img"
                src={product.thumbnail}
                alt={product.title}
              />
              <div className="star">
                <img className="starImg" src={Star} alt="" />
                <p>({product.rating})</p>
              </div>
              <p>{product.title}</p>
              <p className="card-description">{product.description}</p>
              <div className="card-price">
                <h2>${product.price}</h2>
                <button>
                  <img src={Cart} alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && searchTerm && (
          <div className="no-results">
            <p>No products found for "{searchTerm}"</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
