import React from "react";
import Categories from "../components/Categories";
import Tab from "../components/Tab";
import Search from "../UI/MyButtons/Search";
import axios from "axios";
import { Container } from "../components/StyledComponents/StyledComp";
import { CSSTransition, TransitionGroup } from "react-transition-group";



const RecipesMain = () => {
  const [items, setItems] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://653fc1ca45bedb25bfc12807.mockapi.io/recipes`,
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
      <Tab {...tab} />
    </CSSTransition>
  ));



  return (
    <Container>
      <div className="receipts__inner">
        <div className="recipes__categ-part">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <Categories
            value={categoryId}
            onClickCategory={(index) => setCategoryId(index)}
          />
        </div>

        <div className="recepit__list-wrapper">
          <h1 className="receipts__title">
            Explore Your Appetite:&nbsp;
            <span>
              Cook According to Your Mood and Begin Your Culinary Journey!
            </span>
          </h1>

          <TransitionGroup className="receipts__list">
            {cards}
          </TransitionGroup>
        </div>
      </div>
    </Container>
  );
};

export default RecipesMain;
