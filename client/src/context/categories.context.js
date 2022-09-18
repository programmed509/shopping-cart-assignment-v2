import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3002/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res.filter((category) => category.enabled)));
  }, []);

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoriesContext.Provider
      value={{ categories, selectedCategory, selectCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
