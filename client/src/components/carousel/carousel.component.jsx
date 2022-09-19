import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { CategoriesContext } from "../../context/categories.context";

const HomeCarousel = () => {
  const { banners } = useContext(CategoriesContext);
  return (
    <Carousel variant="dark">
      {banners &&
        banners.map((banner) => {
          return (
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={banner.bannerImageUrl}
                alt={banner.bannerImageAlt}
              />
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default HomeCarousel;
