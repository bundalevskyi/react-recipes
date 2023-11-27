import React from "react";
import { Link } from "react-router-dom";

const TabVeg = ({ img, title, id }) => {
  return (
    <Link to={`/vegan/${id}`} class="receipts__item">
      <img className="receipts__img" src={img} alt={title} />
      <p className="receipts__item-title vegan__item-border">{title}</p>
    </Link>
  );
};

export default TabVeg;
