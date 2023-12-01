import React from "react";

const CategoriesVeg = ({ value, onClickCategory }) => {
  const categ = [
    "All recipes",
    "Main dishes",
    "Breakfasts",
    "Appetizers",
    "Desserts",
  ];

  return (
    <div className="recipes__categories">
      <div className="recipes__categories-inner vegan__border">
        <h2 className="recipes__categ-title vegan__categ-title">
          Category Selection
        </h2>
        <div className="categ">
        {categ.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={`categories__text ${
              value === index ? "categories__text--active" : ""
            }`}>
            {categoryName}
          </li>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesVeg;
