import React from "react";
import {
  NavigateButton,
  CategoryContainer,
  ImageContainer,
  DetailsContainer,
} from "./category.styles";

import { BoldText } from "../cart/cart.styles";
import { useNavigate } from "react-router-dom";

const Category = ({ category, index }) => {
  const navigate = useNavigate();

  const navigateToCategory = (categoryKey) =>
    navigate(`/products/${categoryKey}`);

  const renderImage = () => (
    <ImageContainer>
      <img src={category.imageUrl} alt={category.name} />
    </ImageContainer>
  );

  const renderDetails = () => (
    <DetailsContainer>
      <BoldText fontSize={30} fontWeight={600}>
        {category.name}
      </BoldText>
      <p>{category.description}</p>
      <NavigateButton onClick={() => navigateToCategory(category.key)}>
        Explore {category.name}
      </NavigateButton>
    </DetailsContainer>
  );

  return (
    <CategoryContainer>
      {index % 2 === 0 ? (
        <>
          {renderImage()}
          {renderDetails()}
        </>
      ) : (
        <>
          {renderDetails()}
          {renderImage()}
        </>
      )}
    </CategoryContainer>
  );
};

export default Category;
