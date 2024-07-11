import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartProduct } from '../../../../../models/cart-product';
import { selectCartItems } from '../../../../state/cart/cart.selectors';

@Component({
  selector: 'app-order-products',
  standalone: true,
  imports: [],
  templateUrl: './order-products.component.html',
  styleUrl: './order-products.component.css'
})
export class OrderProductsComponent implements OnInit {
  
  cartItems: CartProduct[] = [];
  
  constructor(private store: Store){}
  
  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.store.select(selectCartItems).subscribe(items => {
      this.cartItems = items;
    });
  }
}
