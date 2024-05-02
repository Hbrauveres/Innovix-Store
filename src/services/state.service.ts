// state.service.ts

import { Injectable } from '@angular/core';
import { StateModel } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
    private state: StateModel; 

    constructor() {
        this.state = new StateModel
    }

    // Methods to manipulate products
    getProducts() {
        return this.state.products;
    }

    addProduct(product: any) {
        this.state.products.push(product);
    }

    // Methods to manipulate cart
    getCart() {
        return this.state.cart;
    }

    addToCart(item: any) {
        this.state.cart.push(item);
    }

    // Methods to manipulate user
    getUser() {
        return this.state.user;
    }

    setUser(user: any) {
        this.state.user = user;
    }
}
