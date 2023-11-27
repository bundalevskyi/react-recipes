import React from "react";
import { Link } from "react-router-dom";

const Tab = ({ img, title, id }) => {
  return (
    <Link to={`/recipes/${id}`} class="receipts__item">
      <img className="receipts__img" src={img} alt={title} />
      <p className="receipts__item-title">{title}</p>
    </Link>
  );
};

export default Tab;
