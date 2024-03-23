// HomePage.js
import React, { useState } from "react";
import "./Home.css";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";

function HomePage() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (productName, price) => {
    const existingProduct = products.find(
      (product) => product.name.toLowerCase() === productName.toLowerCase()
    );
    if (existingProduct) {
      alert("Product already exists");
      return;
    }

    const newProduct = { name: productName, price: parseFloat(price) };
    setProducts([...products, newProduct]);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
  };
  const handleDeleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleSearch = (query) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="home-container">
      <h2>Home Page</h2>
      <AddProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} onSearch={handleSearch} onDeleteProduct={handleDeleteProduct} />
    </div>
  );
}

export default HomePage;
