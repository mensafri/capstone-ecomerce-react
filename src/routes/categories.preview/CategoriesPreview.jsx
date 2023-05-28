import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
// import ProductCard from "../../components/product-card/ProductCard";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
}
