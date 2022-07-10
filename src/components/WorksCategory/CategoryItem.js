import React from "react";
import Img from "../../assets/card1.png";
import "./CategoryItem.scss";

export const CategoryItem = ({ category }) => {
  return (
    <div className="category-item__container">
      <h4>{category.title}</h4>
      <button>View</button>
    </div>
  );
};
