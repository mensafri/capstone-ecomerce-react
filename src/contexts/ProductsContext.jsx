import { createContext, useState } from "react";
// import SHOP_DATA from "../shop-data.js";
// import { addColectionAndDocuments } from "../utils/firebase/firebase.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  // useEffect(() => {
  //   addColectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  const [products, setProducts] = useState([]);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
