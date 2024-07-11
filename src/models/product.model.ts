import { Sale } from "./sale-model";

export interface Product {
  id:string;
  name:string;
  price:number;
  details:string;
  imageUrl:string;
  sale: Sale | null;
}