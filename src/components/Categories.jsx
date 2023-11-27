import React from "react";

const Categories = ({ value, onClickCategory }) => {
  const categ = [
    "All recipes",
    "Main dishes",
    "Breakfasts",
    "Fish dishes",
    "Appetizers",
    "Desserts",
  ];

  return (
    <div className="receipts__categories">
      <ul className="receipts__categories-inner">
        <h2 className="receipts__categ-title">Category Selection</h2>
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

export default Categories;
