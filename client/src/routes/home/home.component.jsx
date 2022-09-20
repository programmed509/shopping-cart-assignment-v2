import { useContext, useEffect } from "react";
import HomeCarousel from "../../components/carousel/carousel.component";
import Category from "../../components/category/category.component";
import { CategoriesContext } from "../../context/categories.context";
import { SectionWithShadow } from "./home.styles";

const Home = () => {
  const { categories, selectCategory } = useContext(CategoriesContext);
  //eslint-disable-next-line
  useEffect(() => selectCategory(null), []);

  return (
    <>
      <SectionWithShadow>
        <HomeCarousel />
      </SectionWithShadow>
      {categories &&
        categories
          .filter((category) => category.enabled)
          .map((category, index) => {
            return (
              <>
                <SectionWithShadow>
                  <Category
                    key={category.id}
                    category={category}
                    index={index}
                  />
                </SectionWithShadow>
              </>
            );
          })}
    </>
  );
};

export default Home;
