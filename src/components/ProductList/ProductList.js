import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
function ProductList(props) {
  const { products, filteredProducts } = useSelector((state) => {
    return state.productList;
  });
  return (
    <div className="ProductList__container">
      {filteredProducts.length !== 0 ? (
        <>
          {filteredProducts.map((product, index) => {
            return (
              <ProductItem
                key={product.id}
                showCount={false}
                product={product}
                index={index}
              />
            );
          })}
        </>
      ) : (
        <>
          {products.length === 0 ? (
            <div>Loading....</div>
          ) : (
            <>
              {products.map((product, index) => {
                return (
                  <ProductItem
                    key={product.id}
                    showCount={false}
                    product={product}
                    index={index}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ProductList;
