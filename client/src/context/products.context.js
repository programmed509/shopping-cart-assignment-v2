import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  const filterCategoryProducts = (category) => {
    if (category) {
      setFilteredProducts(
        products.filter((product) => product.category === category.id)
      );
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        filterCategoryProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
