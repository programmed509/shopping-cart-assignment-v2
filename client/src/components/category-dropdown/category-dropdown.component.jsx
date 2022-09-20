import React, { useContext } from "react";
import { useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import {
  CategoryDropdownContainer,
  DownArrow,
  DropdownItem,
  DropdownItems,
  SelectedCategory,
} from "./category-dropdown.styles";

const CategoryDropdown = ({ chooseCategory }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { selectedCategory, categories } = useContext(CategoriesContext);

  return (
    <CategoryDropdownContainer aria-expanded={toggleDropdown}>
      <SelectedCategory
        tabIndex={"0"}
        onClick={() => setToggleDropdown(!toggleDropdown)}
      >
        {selectedCategory ? selectedCategory.name : "Select Category"}
        <DownArrow> &gt; </DownArrow>
      </SelectedCategory>
      {toggleDropdown && (
        <DropdownItems aria-label="Select Category">
          {categories.map((category) => (
            <DropdownItem
              onClick={() => {
                chooseCategory(category);
                setToggleDropdown(!toggleDropdown);
              }}
              role={"button"}
              tabIndex={"0"}
            >
              {category.name}
            </DropdownItem>
          ))}
        </DropdownItems>
      )}
    </CategoryDropdownContainer>
  );
};

export default CategoryDropdown;
