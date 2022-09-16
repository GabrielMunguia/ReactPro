import { createContext, CSSProperties, useContext, useState } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import {  Product, ProductContextProps } from "../interfaces/interfaces";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

export interface Props {
  children: React.ReactElement | React.ReactElement[];
  product: Product;
  className?:string;
  style?:CSSProperties
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product,className ,style}: Props) => {
  const { counter, increaseBy } = useProduct();
  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
      }}
    >
      
      <div style={style} className={` ${styles.productCard} ${className}`}>{children}</div>
    </Provider>
  );
};

ProductCard.title = ProductTitle;
ProductCard.image = ProductImage;
ProductCard.buttons = ProductButtons;
