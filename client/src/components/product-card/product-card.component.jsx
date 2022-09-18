import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  MyButton,
  MyCard,
  MyCardBody,
  MyCardDescription,
  MyCardFooter,
  MyCardImage,
  MyCardSection,
  MyCardText,
  MyCardTitle,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <MyCard width={"100%"}>
      <MyCardTitle>
        <b>{product.name}</b>
      </MyCardTitle>
      <MyCardBody>
        <MyCardImage src={product.imageURL} alt={product.name} />

        <MyCardDescription>{product.description}</MyCardDescription>

        <MyCardFooter>
          <MyCardText>MRP Rs.{product.price}</MyCardText>

          <MyButton onClick={() => addToCart(product)}>
            <b>
              Buy Now <span> @ Rs. {product.price}</span>{" "}
            </b>
          </MyButton>
        </MyCardFooter>
      </MyCardBody>
    </MyCard>
  );
};

export default ProductCard;
