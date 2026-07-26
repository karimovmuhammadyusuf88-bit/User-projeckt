
import { useState } from "react";

import { products as productData } from "../data/products";

import Search from "../components/Search";
import ProductMap from "../components/ProductMap";

function Products() {
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");

  // Search
  const filteredProducts = products.filter((product) =>
    `${product.title} ${product.brand} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Delete
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Rostdan ham o'chirmoqchimisiz?"
    );

    if (confirmDelete) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  // Edit
  const handleEdit = (product) => {
    const title = prompt("Title", product.title);
    const brand = prompt("Brand", product.brand);
    const category = prompt("Category", product.category);
    const price = prompt("Price", product.price);

    if (title && brand && category && price) {
      setProducts(
        products.map((item) =>
          item.id === product.id
            ? {
                ...item,
                title,
                brand,
                category,
                price: Number(price),
              }
            : item
        )
      );
    }
  };

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        placeholder="Search products..."
      />

      <ProductMap
        products={filteredProducts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default Products;