export interface Product {
  id:string;
  name:string;
  price:string;
  details:string;
  image:string;
}

export interface ProductsModel {
  products: Product[],
  errorMessage:string
}