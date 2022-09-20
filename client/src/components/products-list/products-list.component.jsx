import ProductCard from "../product-card/product-card.component";
import { ProductsContainer } from "./products-list.styles";

const ProductsList = ({ products, filteredProducts }) => {
  return (
    <ProductsContainer>
      {filteredProducts.length > 0
        ? filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </ProductsContainer>
  );
};

export default ProductsList;
