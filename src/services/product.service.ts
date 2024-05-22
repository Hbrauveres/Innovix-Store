import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor (private http:HttpClient){

  }

  getAll(){
    return this.http.get<Product[]>("GET ALL PRODUCTS ENDPOINT GOES HERE");
  }
}