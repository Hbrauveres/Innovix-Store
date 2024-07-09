import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { ProductsState } from "../app/state/product/product.state";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_BASE_URL = 'http://localhost:3000';

  constructor (private http:HttpClient){

  }

  getProducts(): Observable<ProductsState>{
    return this.http.get<ProductsState>(`${this.API_BASE_URL}/api/products`);
  }

  createProduct(product: Product): Observable<{success:boolean}> {
    return this.http.post<{success:boolean}>(`${this.API_BASE_URL}/api/addProduct`, product);
  }
}
