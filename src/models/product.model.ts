export interface Product {
  id:string;
  name:string;
  price:string;
  details:string;
  imageUrl:string;
}

export interface ProductsModel {
  products: Product[],
  errorMessage:string
}