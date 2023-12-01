import React from "react";
import { Link } from "react-router-dom";

const TabVeg = ({ img, title, id }) => {
  return (
    <Link to={`/vegan/${id}`} class="recipes__item">
      <img className="recipes__img" src={img} alt={title} />
      <p className="recipes__item-title vegan__item-border">{title}</p>
    </Link>
  );
};

export default TabVeg;
