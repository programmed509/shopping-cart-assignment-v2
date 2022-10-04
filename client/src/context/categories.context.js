import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    categories.length === 0 && fetchCategories();
    banners.length === 0 && fetchBanners();
    //eslint-disable-next-line
  }, []);

  const fetchBanners = () => {
    fetch("http://localhost:3002/banners")
      .then((res) => res.json())
      .then((response) => setBanners(response));
  };

  const fetchCategories = () => {
    fetch("http://localhost:3002/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res.filter((category) => category.enabled)));
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        banners,
        selectedCategory,
        selectCategory,
        fetchCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
