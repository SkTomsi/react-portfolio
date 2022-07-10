import React from "react";
import "./WorksCategory.scss";
import { Categories } from "../../Shared/Data";
import { CategoryItem } from "./CategoryItem";

const WorksCategory = () => {
  return (
    <div className="works" id="works-section">
      <div className="works__container">
        <h1>Works</h1>
        <div className="works__items">
          {Categories.map((category) => {
            return <CategoryItem key={category.id} category={category} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WorksCategory;
