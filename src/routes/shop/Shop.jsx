import React from "react";
// import ProductCard from "../../components/product-card/ProductCard";
import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories.preview/CategoriesPreview";
import Category from "../category/Category";
import { createContext, useEffect, useState } from "react";
import { setCategories } from "../../store/categories/category.action";
import { getCategoriesAndDocument } from "../../utils/firebase/firebase";
import { useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCategoriesAndDocument("categories");
      dispatch(setCategories(categoriesArray));
    };
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
