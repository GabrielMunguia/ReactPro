import { useContext, useState } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from '../styles/styles.module.css';
export const ProductImage = ({ img }: { img?: string }) => {
    const {product} = useContext(ProductContext);
    const [image, setimage] = useState(  noImage);
    const imageLoad = () => {
        setimage(img || product.img || noImage);
    }
    return (
      <img className={styles.productImg} src={image } alt="Product"  onLoad={imageLoad}/>
    );
  };