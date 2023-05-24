import CategoryItem from "../category-item/CategoryItem";
import React from "react";
import "./DirectoryComponent.style.scss";

export default function DirectoryComponent({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}
