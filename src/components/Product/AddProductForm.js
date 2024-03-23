// AddProductForm.js
import React, { useState } from "react";
import "./AddProductForm.css"

function AddProductForm({ onAddProduct }) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    if (!productName || !price) {
      alert("Please fill in all fields");
      return;
    }
    onAddProduct(productName, price);
    setProductName("");
    setPrice("");
  };

  return (
    <div className="add-product-form">
      <h3>Add Product Form</h3>
      <input
        type="text"
        placeholder="Product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddProduct}>Add</button>
    </div>
  );
}

export default AddProductForm;
