import React from "react";
import {
  ColModified,
  ModifiedLink,
  CategoryContainer,
  ImageContainer,
  DetailsContainer,
} from "./category.styles";

import { BoldText } from "../cart/cart.styles";

const Category = ({ category, index }) => {
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
      <span>{category.description}</span>
      <ModifiedLink to={`/products/${category.key}`}>
        Explore {category.name}
      </ModifiedLink>
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
