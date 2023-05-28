import DirectoryItem from "../directory-item/DirectoryItem";
import React from "react";
import "./DirectoryComponent.style.scss";

export default function DirectoryComponent({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}
