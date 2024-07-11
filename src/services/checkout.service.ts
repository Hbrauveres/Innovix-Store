import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CartResponse } from "../models/responses/cart-response.model";
import { Cart } from "../models/cart.model";
import { SaveCartRequest } from "../models/requests/save-cart-request.model";
import { SaveCartResponse } from "../models/responses/save-cart-response.model";
import { CartProduct } from "../models/cart-product";
import { Address } from "../models/address.model";
import { CalculateShippingResponse } from "../models/responses/calculate-shipping-response.model";
import { CalculateTaxResponse } from "../models/responses/calculate-tax-response.model" 

@Injectable({
  providedIn: 'root'
})

export class CheckoutService {

  private API_BASE_URL = 'http://localhost:3000';

  constructor (private http:HttpClient){

  }

  getCart(userEmail: string): Observable<CartResponse>{

    return this.http.get<CartResponse>(`${this.API_BASE_URL}/checkout/cart`, 
      {
        params: { email: userEmail }
      });
  }

  saveCart(cartItems: CartProduct[], address: Address, email: string): Observable<SaveCartResponse> {
    
    const saveCartRequest: SaveCartRequest = {
        email: email,
        cart: {
            products: cartItems,
            shippingAddress: address
        }
    }
    
    return this.http.post<SaveCartResponse>(`${this.API_BASE_URL}/checkout/save-cart`, saveCartRequest)  
  }

  calculateTax(products: CartProduct[]): Observable<CalculateTaxResponse> {
    const totalPrice = products.reduce((total, product) => total + (product.unitPrice * product.quantity), 0);
    
    return this.http.post<CalculateTaxResponse>(`${this.API_BASE_URL}/checkout/calculate-tax`, { totalPrice } )
  }

  calculateShipping(shippingAddress: Address): Observable<CalculateShippingResponse> {

    return this.http.post<CalculateShippingResponse>(`${this.API_BASE_URL}/checkout/calculate-shipping`, shippingAddress )
  }
}