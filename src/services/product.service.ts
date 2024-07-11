import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { Observable } from "rxjs";
import { ProductsResponse } from "../models/responses/products-response.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_BASE_URL = 'http://localhost:3000';

  constructor (private http:HttpClient){

  }

  getProducts(): Observable<ProductsResponse>{
    return this.http.get<ProductsResponse>(`${this.API_BASE_URL}/api/products`);
  }

  createProduct(product: Product): Observable<{success:boolean}> {
    return this.http.post<{success:boolean}>(`${this.API_BASE_URL}/api/products/register`, product);
  }
}
