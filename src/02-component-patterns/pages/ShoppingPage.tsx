import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
  id: "1",
  title: "Coffe Mug",
  img: "./img/coffee-mug.png",
};

const ShoppingPage = () => {
  return (
    <div className="w-full p-5">
      <h1 className="text-4xl underline w-full text-center  ">ShoppingPage</h1>
      <div className="mt-14 flex flex-wrap justify-start mx-5">
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard   product={product} >
        <ProductCard.image img={product.img} />
        <ProductCard.title title={product.title} />
        <ProductCard.buttons  />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
