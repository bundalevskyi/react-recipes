import React from "react";
import TabVeg from "../components/TabVeg";
import CategoriesVeg from "../components/CategoriesVeg";
import axios from "axios";
import { Container } from "../components/StyledComponents/StyledComp";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Search from "../components/Search";

const RecipesVeg = () => {
  const [items, setItems] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://65560ebc84b36e3a431eea5e.mockapi.io/vegan`,
          {
            params: {
              category: categoryId > 0 ? categoryId : undefined,
              search: searchValue ? searchValue : undefined,
            },
          }
        );
        setItems(response.data);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryId, searchValue]);

  const cards = items.map((tab) => (
    <CSSTransition key={tab.id} timeout={500} classNames="fade">
      <TabVeg {...tab} />
    </CSSTransition>
  ));

  return (
    <Container>
      <div className="recipes__inner">
        <div className="recipes__categ-part">
          <h1 className="recipes__title-mob">
            Explore Your Taste:&nbsp;
            <span>Choose a Recipe That Suits You!</span>
          </h1>
          <div className="search__wrapper">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <CategoriesVeg
            value={categoryId}
            onClickCategory={(index) => setCategoryId(index)}
          />
        </div>
        <div className="recipe__list-wrapper">
          <h1 className="recipes__title">
            Explore Your Taste:&nbsp;
            <span>Choose a Recipe That Suits You!</span>
          </h1>
          <TransitionGroup className="recipes__list">{cards}</TransitionGroup>
        </div>
      </div>
    </Container>
  );
};

export default RecipesVeg;
