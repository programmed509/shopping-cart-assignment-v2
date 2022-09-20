import { ProductsContext } from "../../context/products.context";
import { useContext, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar.component";
import ProductsList from "../../components/products-list/products-list.component";

const Products = () => {
  const { categories, selectedCategory, selectCategory } =
    useContext(CategoriesContext);
  const { products, filteredProducts, filterCategoryProducts } =
    useContext(ProductsContext);
  return (
    <div>
      <Sidebar
        categories={categories}
        selectCategory={selectCategory}
        selectedCategory={selectedCategory}
        filterCategoryProducts={filterCategoryProducts}
      />
      <ProductsList products={products} filteredProducts={filteredProducts} />
    </div>
  );
};

export default Products;
