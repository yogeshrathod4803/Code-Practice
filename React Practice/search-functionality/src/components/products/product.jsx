import React, { useEffect, useState } from "react";
import "./product.css"; // Make sure the path is correct
import NavBar from "../navBar/navBar";

const Product = (props) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(""); // Define the query state

  const performApiCall = async () => {
    const url = "https://dummyjson.com/products";
    try {
      let response = await fetch(url);
      let data = await response.json();
      setData(data.products);
    } catch (error) {
      console.log("Error in fetching data:", error);
    }
  };

  useEffect(() => {
    performApiCall();
  }, []);

  const filteredData = Array.isArray(data)
    ? data.filter((item) => item.title.toLowerCase().includes(query))
    : [];

  return (
    <>
      <NavBar setQuery={setQuery} query={query} />
      {/* Pass setQuery as a prop */}
      <div className="main-container">
        {filteredData.map((product) => (
          <div className="wrapper">
            <img
              className="productImage"
              src={product.thumbnail}
              alt="phoneImage"
            />
            <div className="productDetails">
              <h3 className="productTitle">{product.title}</h3>
              <div className="price-and-btn">
                <p className="productPrice">{product.price}</p>
                <button className="addToCartButton" type="button">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
