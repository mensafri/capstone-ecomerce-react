import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebase";
// import SHOP_DATA from "../shop-data.js";
// import { addColectionAndDocuments } from "../utils/firebase/firebase.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  // useEffect(() => {
  //   addColectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocument();
      setCategoriesMap(categoryMap);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
