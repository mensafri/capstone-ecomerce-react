import React, { Fragment, useContext } from "react";
// import { CategoriesContext } from "../../contexts/CategoriesContext";
// import ProductCard from "../../components/product-card/ProductCard";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);
  // const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
}
