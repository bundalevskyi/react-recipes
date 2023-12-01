import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import StarSvg from "../img/svgComponents/StarSvg";
import ClocheSvg from "../img/svgComponents/ClocheSvg";
import ClockSvg from "../img/svgComponents/ClockSvg";
import BackButton from "../UI/MyButtons/BackButton";
import { Container } from "../components/StyledComponents/StyledComp";

const OneVegRecipe = () => {
  const { id } = useParams();
  const [items, setItems] = React.useState([null]);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://65560ebc84b36e3a431eea5e.mockapi.io/vegan/` + id
        );
        const data = response.data;
        setItems(data);
        setIngredients(data.ingredients || []);
        setSteps(data.steps || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const stepsList = steps.map((step, index) => (
    <p className="step" key={index}>
      {step}
    </p>
  ));

  const ingredientsList = ingredients.map((ingredient, index) => (
    <li className="recipe__ingredient-item" key={index}>
      {ingredient}
    </li>
  ));

  return (
    <Container>
      <div className="recipe__wrapper">
        <BackButton />
        <div className="recipe__inner">
          <div className="recipe__first-part">
            <h1 className="recipe__title">{items.title}</h1>
            <div className="recipe__descr">{items.descr}</div>
            <div className="recipe__steps">
              <h3 className="recipe__method-title">Method of Preparation</h3>
              {stepsList}
            </div>
          </div>
          <div className="recipe__second-part">
            <img src={items.img} alt="" className="recipe__img" />
            <div className="recipe__prep">
              <div className="recipe__prep-inner">
                <ClockSvg />
                <p className="recipe__time">{items.time}</p>
              </div>
              <div className="recipe__prep-inner">
                <ClocheSvg />
                <p className="recipe__portion">{items.portions}</p>
              </div>
              <div className="recipe__prep-inner">
                <StarSvg />
                <p className="recipe__level">{items.level}</p>
              </div>
            </div>
            <h1 className="ingredients__title">Ingredients:</h1>
            <ul className="recipe__ingredients-list">{ingredientsList}</ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OneVegRecipe;
