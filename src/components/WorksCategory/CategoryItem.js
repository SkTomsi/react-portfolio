import React from "react";

import "./CategoryItem.scss";

export const CategoryItem = ({ category }) => {
  return (
    <div className="category-item__container">
      <div className="category-item__header">
        <h4>{category.title}</h4>
        <p>{category.desc}</p>
      </div>

      <button>view</button>
    </div>
  );
};
