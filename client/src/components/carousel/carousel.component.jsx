import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const HomeCarousel = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/banners")
      .then((res) => res.json())
      .then((response) => setBanners(response));
  }, []);
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
