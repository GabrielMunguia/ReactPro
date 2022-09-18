import { createContext, CSSProperties, useContext, useState } from "react";
import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import {  Product, productArgs, ProductContextProps } from "../interfaces/interfaces";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

export interface Props {
  children: React.ReactElement | React.ReactElement[];
  product: Product;
  className?:string;
  style?:CSSProperties
  onChange?:(args:productArgs)=>void;
  value?:number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product,className ,style,onChange,value}: Props) => {
  const { counter, increaseBy } = useProduct({onChange,product,value});
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
