import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-css.css'
const product = {
  id: "1",
  title: "Coffe Mug",
  img: "./img/coffee-mug.png",
};

const lstProd=[1,2]

const ShoppingPage = () => {
  return (
    <div className="w-full p-5">
      <h1 className="text-4xl underline w-full text-center  ">ShoppingPage</h1>
      <div className="mt-14 flex flex-wrap justify-start mx-5">

      <div className="mx-10">
            <ProductCard className="bg-neutral " product={product}>
              <ProductImage style={{marginBottom:"2px"}} className="custom-image" />
              <ProductTitle style={{fontWeight:"bold"}} className="text-white" />
              <ProductButtons  className="custom-buttons" />
            </ProductCard>
        </div>

        <ProductCard   className="bg-rose shadow-rose "  product={product} >
             <ProductCard.image className="custom-image" img="https://i.pinimg.com/originals/db/2f/76/db2f7619df455ddbb31dc52ab286ab1b.jpg" />
             <ProductCard.title className="text-white-bold" title={product.title} />
             <ProductCard.buttons className="custom-buttons "  />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
