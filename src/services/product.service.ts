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

  async getProducts(): Promise<Product[]> {
    const products: Product[] = [
      {
        id: '1',
        name: 'Product One',
        price: '19.99',
        details: 'Details about Product One',
        imageUrl: 'https://example.com/product1.jpg'
      },
      {
        id: '2',
        name: 'Product Two',
        price: '29.99',
        details: 'Details about Product Two',
        imageUrl: 'https://example.com/product2.jpg'
      },
      {
        id: '3',
        name: 'Product Three',
        price: '39.99',
        details: 'Details about Product Three',
        imageUrl: 'https://example.com/product3.jpg'
      },
      {
        id: '4',
        name: 'Product Four',
        price: '49.99',
        details: 'Details about Product Four',
        imageUrl: 'https://example.com/product4.jpg'
      },
      {
        id: '5',
        name: 'Product Five',
        price: '59.99',
        details: 'Details about Product Five',
        imageUrl: 'https://example.com/product5.jpg'
      },
      {
        id: '6',
        name: 'Product Six',
        price: '69.99',
        details: 'Details about Product Six',
        imageUrl: 'https://example.com/product6.jpg'
      },
      {
        id: '7',
        name: 'Product Seven',
        price: '79.99',
        details: 'Details about Product Seven',
        imageUrl: 'https://example.com/product7.jpg'
      },
      {
        id: '8',
        name: 'Product Eight',
        price: '89.99',
        details: 'Details about Product Eight',
        imageUrl: 'https://example.com/product8.jpg'
      },
      {
        id: '9',
        name: 'Product Nine',
        price: '99.99',
        details: 'Details about Product Nine',
        imageUrl: 'https://example.com/product9.jpg'
      },
      {
        id: '10',
        name: 'Product Ten',
        price: '109.99',
        details: 'Details about Product Ten',
        imageUrl: 'https://example.com/product10.jpg'
      },
      {
        id: '11',
        name: 'Product Eleven',
        price: '119.99',
        details: 'Details about Product Eleven',
        imageUrl: 'https://example.com/product11.jpg'
      },
      {
        id: '12',
        name: 'Product Twelve',
        price: '129.99',
        details: 'Details about Product Twelve',
        imageUrl: 'https://example.com/product12.jpg'
      },
      {
        id: '13',
        name: 'Product Thirteen',
        price: '139.99',
        details: 'Details about Product Thirteen',
        imageUrl: 'https://example.com/product13.jpg'
      },
      {
        id: '14',
        name: 'Product Fourteen',
        price: '149.99',
        details: 'Details about Product Fourteen',
        imageUrl: 'https://example.com/product14.jpg'
      },
      {
        id: '15',
        name: 'Product Fifteen',
        price: '159.99',
        details: 'Details about Product Fifteen',
        imageUrl: 'https://example.com/product15.jpg'
      }
    ];
    

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  }
}