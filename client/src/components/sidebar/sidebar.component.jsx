import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryDropdown from "../category-dropdown/category-dropdown.component";
import { SidebarContainer, SidebarItem } from "./sidebar.styles";

const Sidebar = ({
  categories,
  selectCategory,
  selectedCategory,
  filterCategoryProducts,
}) => {
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
    <>
      <SidebarContainer>
        {categories &&
          categories?.map((category) => {
            let active = category?.id === selectedCategory?.id || false;
            return (
              <SidebarItem
                key={category.id}
                onClick={() => chooseCategory(category)}
                active={active}
                tabIndex={"0"}
                aria-label={`${category.name} ${active ? "selected" : ""}`}
              >
                {category.name}
              </SidebarItem>
            );
          })}
      </SidebarContainer>
      <CategoryDropdown chooseCategory={chooseCategory} />
    </>
  );
};

export default Sidebar;
