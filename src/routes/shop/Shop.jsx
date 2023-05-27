import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      {products.map(({ name, id }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
}
