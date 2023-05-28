import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./category.styles.scss";

export default function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products && products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
