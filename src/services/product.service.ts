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
        name: 'Laptop',
        price: 799.99,
        details: 'High-performance laptop with SSD storage.',
        imageUrl: 'https://placehold.co/1880x600',
        isOnSale: true,
        discountedPrice: 699.99
      },
      {
        id: '2',
        name: 'Smartphone',
        price: 599.99,
        details: 'Latest model smartphone with dual-camera setup.',
        imageUrl: 'https://example.com/smartphone.jpg',
        isOnSale: false,
        discountedPrice: 0
      },
      {
        id: '3',
        name: 'Headphones',
        price: 149.99,
        details: 'Wireless headphones with noise-cancellation feature.',
        imageUrl: 'https://example.com/headphones.jpg',
        isOnSale: false,
        discountedPrice: 0
      },
      {
        id: '4',
        name: 'Smart Watch',
        price: 199.99,
        details: 'Fitness tracker and smartwatch with heart rate monitor.',
        imageUrl: 'https://preview.redd.it/zl3jkgy4ic681.png?width=1842&format=png&auto=webp&s=0c13569a0f4f3e56921f2a0e754c3b08e180d463',
        isOnSale: true,
        discountedPrice: 169.99
      },
      {
        id: '5',
        name: 'Tablet',
        price: 299.99,
        details: '10-inch tablet with quad-core processor.',
        imageUrl: 'https://example.com/tablet.jpg',
        isOnSale: false,
        discountedPrice: 0
      },
      {
        id: '6',
        name: 'Camera',
        price: 499.99,
        details: 'Mirrorless camera with 24MP sensor and 4K video recording.',
        imageUrl: 'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isOnSale: true,
        discountedPrice: 449.99
      },
      {
        id: '7',
        name: 'Gaming Console',
        price: 399.99,
        details: 'Next-gen gaming console with high-definition graphics.',
        imageUrl: 'https://example.com/console.jpg',
        isOnSale: false,
        discountedPrice: 0
      },
      {
        id: '8',
        name: 'Wireless Speaker',
        price: 99.99,
        details: 'Portable wireless speaker with built-in battery.',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1674729243673-0b5e871a8a24?q=80&w=3635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isOnSale: true,
        discountedPrice: 79.99
      },
      {
        id: '9',
        name: 'External Hard Drive',
        price: 129.99,
        details: '1TB external hard drive for data backup and storage.',
        imageUrl: 'https://example.com/harddrive.jpg',
        isOnSale: false,
        discountedPrice: 0
      },
      {
        id: '10',
        name: 'Fitness Tracker',
        price: 79.99,
        details: 'Water-resistant fitness tracker with heart rate monitor.',
        imageUrl: 'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isOnSale: true,
        discountedPrice: 59.99
      }
    ];
    

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  }
}