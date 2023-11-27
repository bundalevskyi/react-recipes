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
    <div className="receipts__categories">
      <ul className="receipts__categories-inner vegan__border">
        <h2 className="receipts__categ-title vegan__categ-title">
          Category Selection
        </h2>
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
      </ul>
    </div>
  );
};

export default CategoriesVeg;
