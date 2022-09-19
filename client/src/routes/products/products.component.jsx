import {
  Sidebar,
  SidebarItem,
  ProductsContainer,
  Container,
} from "./products.styles";
import { ProductsContext } from "../../context/products.context";
import { useContext, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { useNavigate, useParams } from "react-router-dom";
import CategoryDropdown from "../../components/category-dropdown/category-dropdown.component";

const Products = () => {
  const { categories, selectedCategory, selectCategory } =
    useContext(CategoriesContext);
  const { products, filteredProducts, filterCategoryProducts } =
    useContext(ProductsContext);
  const { categoryParam } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categoryParam) {
      let categoryFromParams =
        categories?.length > 0 &&
        categories?.filter((category) => category.key === categoryParam);
      chooseCategory(categoryFromParams[0]);
    } //eslint-disable-next-line
  }, []);

  const chooseCategory = (category) => {
    if (category?.id === selectedCategory?.id || category === null) {
      filterCategoryProducts(null);
      selectCategory(null);
      navigate("/products");
    } else {
      filterCategoryProducts(category);
      selectCategory(category);
      navigate(`/products/${category.key}`);
    }
  };

  return (
    <Container>
      <Sidebar>
        {categories &&
          categories?.map((category) => {
            let active = category?.id === selectedCategory?.id || false;
            return (
              <SidebarItem
                key={category.id}
                onClick={() => chooseCategory(category)}
                active={active}
                tabIndex={"0"}
                role={"button"}
              >
                {category.name}
              </SidebarItem>
            );
          })}
      </Sidebar>
      <ProductsContainer>
        <CategoryDropdown chooseCategory={chooseCategory} />
        {filteredProducts.length > 0
          ? filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </ProductsContainer>
    </Container>
  );
};

export default Products;
