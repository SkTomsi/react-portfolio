import React from "react";

import "./CategoryItem.scss";

export const CategoryItem = ({ category }) => {
  return (
    <div className="category-item__container">
      <h4>{category.title}</h4>
      <button>view</button>
    </div>
  );
};
