import React from "react";
import { Link } from "react-router-dom";

const Tab = ({ img, title, id }) => {
  return (
    <Link to={`/recipes/${id}`} class="recipes__item">
      <img className="recipes__img" src={img} alt={title} />
      <p className="recipes__item-title">{title}</p>
    </Link>
  );
};

export default Tab;
