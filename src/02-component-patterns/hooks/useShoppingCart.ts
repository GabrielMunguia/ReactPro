import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/interfaces";

export const useShoppingCart=()=>{
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCard}>({});

  const onProductCountChange=({count,product}:{count:number,product:Product})=>{

    setShoppingCart((oldShoppinCart)=>{

      const productIntCart:ProductInCard =  oldShoppinCart[product.id] || {...product,count:0} ;

      if(Math.max(productIntCart.count+count,0)>0){
        productIntCart.count+=count;

        return {
          ...oldShoppinCart,
          [product.id]:productIntCart
        }
      }

     //borrar el producto
     const { [product.id]:toDelete,...rest}=shoppingCart;
      return {...rest}
    })
  }

  return { 
    shoppingCart,
    onProductCountChange
  }
}