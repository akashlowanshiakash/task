// ProductList.js
import React, { useState } from "react";
import "./ProductList.css"

function ProductList({ products, onDeleteProduct }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteProduct = (index) => {
    onDeleteProduct(index);
  };

  return (
    <div className="product-list">
      <h3>Product List</h3>
      <input
        type="text"
        placeholder="Search products"
        onChange={handleSearch}
      />
      {filteredProducts.length === 0 ? (
        <p>No Product Found</p>
      ) : (
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
              <button onClick={() => handleDeleteProduct(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
