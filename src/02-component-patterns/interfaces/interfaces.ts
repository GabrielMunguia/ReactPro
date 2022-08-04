 export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
  export interface ProductCardProps {
    children: React.ReactElement | React.ReactElement[];
    product: Product;
  }
  export interface ProductContextProps {
    product: Product;
    counter: number;
    increaseBy: (value: number) => void;
  }