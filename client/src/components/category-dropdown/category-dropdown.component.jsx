import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    <CategoryDropdownContainer>
      <SelectedCategory onClick={() => setToggleDropdown(!toggleDropdown)}>
        {selectedCategory ? selectedCategory.name : "All Products"}
        <DownArrow> &gt; </DownArrow>
      </SelectedCategory>
      {toggleDropdown && (
        <DropdownItems>
          {categories.map((category) => (
            <DropdownItem
              onClick={() => {
                chooseCategory(category);
                setToggleDropdown(!toggleDropdown);
              }}
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
