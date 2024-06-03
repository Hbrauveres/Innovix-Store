export interface Product {
  id:string;
  name:string;
  price:number;
  details:string;
  imageUrl:string;
  isOnSale:boolean;
  discountedPrice:number;
}

export interface ProductsModel {
  products: Product[],
  errorMessage:string
}