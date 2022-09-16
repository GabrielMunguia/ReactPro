import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

interface Props {
  className?: string;
  title?: string;
  style?:CSSProperties;
}
export const ProductTitle = ({ title, className ,style}: Props) => {
  const { product } = useContext(ProductContext);
  const titleProduct = title || product.title;
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {titleProduct}
    </span>
  );
};
