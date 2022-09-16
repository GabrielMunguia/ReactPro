import { CSSProperties, useContext, useState } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from '../styles/styles.module.css';

interface Props{
  img?:string,
  className?:string;
  style?:CSSProperties;
}
export const ProductImage = ({ img,className ,style}: Props) => {
    const {product} = useContext(ProductContext);
    const [image, setimage] = useState(  noImage);
    const imageLoad = () => {
        setimage(img || product.img || noImage);
    }
    return (
      <img style={style} className={`${styles.productImg} ${className}`} src={image } alt="Product"  onLoad={imageLoad}/>
    );
  };