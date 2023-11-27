import React from "react";
import "../css/style.css";
import "../css/reset.css";
import YellowButton from "../UI/MyButtons/YellowButton";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import { Container } from "../components/StyledComponents/StyledComp";

const Home = () => {
  return (
    <div>
      <Container>
        <section className="top section__inner">
          <div className="top__inner">
            <div className="top__descr">
              <h1 className="top__title">
                <span>Welcome&nbsp;</span> to our site where taste meets
                convenience!
              </h1>
              <p className="top__descr-text">
                We've created this resource to share with you the best recipes
                that will allow you to transform ordinary ingredients into
                exquisite dishes. Here, you'll discover incredible culinary
                ideas that enable you to create amazing flavors right in your
                own home.
              </p>
              <div className="top__inner-btn">
                <Link to={`/recipes/`}>
                  <YellowButton>Start cooking!</YellowButton>
                </Link>
              </div>
            </div>
            <div className="top__slider">
              <Slider />
            </div>
          </div>
        </section>
        <section className="best section__inner">
          <div className="best__inner">
            <div className="best__descr">
              <h1 className="best__title section__title">
                Here are the recently selected
                <span> best recipes we recommend you to cook</span>
              </h1>
            </div>
            <div className="best__content">
              <div className="best__item">
                <img
                  className="best__img"
                  src="img/classic-lasagna-lead.jpg"
                  alt=""
                />
                <p className="title__item-descr">Classic lasagna</p>
                <p className="best__item-descr">
                  A classic lasagna, an easy-to-make delight embodying the
                  finest Italian and cozy home traditions
                </p>
                <a href="" className="redBtn best__item-link">
                  Try to cook!
                </a>
              </div>
              <div className="best__item">
                <img
                  className="best__img"
                  src="img/garlic-smashed-potatoes-lead.jpg"
                  alt=""
                />
                <p className="title__item-descr">Garlic-smashed potatoes</p>
                <p className="best__item-descr">
                  Dive into buttery garlic mashed potatoes, a delicious mix of
                  rich flavors and creamy textures
                </p>
                <a href="" className="redBtn best__item-link">
                  Try to cook!
                </a>
              </div>
              <div className="best__item">
                <img className="best__img" src="img/quiche.jpg" alt="" />
                <p className="title__item-descr">Homemade quiche</p>
                <p className="best__item-descr">
                  Delight in the elegance of a homemade quiche, a savory marvel
                  filled with delicate layers and rich ingredients
                </p>
                <a href="" className="redBtn best__item-link">
                  Try to cook!
                </a>
              </div>
              <div className="best__item">
                <img
                  className="best__img"
                  src="img/stuffed-mushrooms-lead.jpg"
                  alt=""
                />
                <p className="title__item-descr">Stuffed mushrooms</p>
                <p className="best__item-descr">
                  Experience the burst of flavors in every bite of these
                  succulent stuffed mushrooms
                </p>
                <a href="" className="redBtn best__item-link">
                  Try to cook!
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="advice section__inner">
          <div className="best__inner">
            <div className="best__descr">
              <h1 className="advice__title section__title">
                Learn about
                <span> the Secrets of Cooking Exquisite Dishes</span>
              </h1>
            </div>
            <div className="advice__content">
              <div className="advice__item">
                <img className="best__img" src="img/pizzadough.jpg" alt="" />
                <p className="title__item-descr">Perfect pizza dough</p>
                <p className="advice__item-descr">
                  Learn to make the perfect pizza dough: expert tips and the
                  best preparation techniques
                </p>
                <a href="" className="blueBtn best__item-link">
                  Read more
                </a>
              </div>
              <div className="advice__item">
                <img className="best__img" src="img/salad-advice.jpg" alt="" />
                <p className="title__item-descr">Summer salads</p>
                <p className="advice__item-descr">
                  Everyday Summer Salad Hacks: Tips for Daily Refreshing and
                  Healthy Meals
                </p>
                <a href="" className="blueBtn best__item-link">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};
export default Home;
