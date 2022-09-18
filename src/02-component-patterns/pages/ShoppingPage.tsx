
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-css.css'




const ShoppingPage = () => {

  const {shoppingCart,onProductCountChange }= useShoppingCart();
  


  return (
    <div className="w-full p-5">
      <h1 className="text-4xl underline w-full text-center  ">ShoppingPage</h1>
      <div className="mt-14 flex flex-wrap justify-start mx-5">

      {
        products.map((prod,i)=>(

             <div key={prod.id} className="mx-10 mt-5">
                <ProductCard className="bg-neutral " product={prod} onChange={onProductCountChange} value={shoppingCart[prod.id]?.count || 0}>
                  <ProductImage style={{marginBottom:"2px"}} className="custom-image" />
                  <ProductTitle style={{fontWeight:"bold"}} className="text-white" />
                  <ProductButtons  className="custom-buttons" />
                </ProductCard>
             </div>
         ))
      }

       
      </div>

      <div className="shopping-cart">
         {
          Object.values(shoppingCart).map((prod,i)=>(
            <div key={Math.random()} className="mx-10 mt-5">
                <ProductCard style={{width:"100px"}} className="bg-neutral " product={prod} value={prod.count} onChange={onProductCountChange}>
                  <ProductImage style={{marginBottom:"2px"}} className="custom-image" />
                  <ProductButtons  className="custom-buttons" />
                </ProductCard>
             </div>
          ))
         }
       </div>
       
    </div>
  );
};

export default ShoppingPage;
