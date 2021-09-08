import React from "react";
import "../components/home.css"

const Home = () => {
  return (
    <>
      <nav>
        <h1>Home Conatiner</h1>
        <div className="add-to-cart">cart 0</div>
      </nav>
      <div className="cart-wrapper">
        <div className="image-wrapper">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            alt="productimage"
          />
        </div>
        <div>
          <span className="product-name">I Phone 11 :</span>
          <span className="product-price">1,10,000</span>
          <div className="btn-wrapper">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
