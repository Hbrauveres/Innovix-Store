import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCart } from '../../../../state/cart/cart.actions';
import { selectCartItems, selectCartShipping, selectCartSubtotal, selectCartTax } from '../../../../state/cart/cart.selectors';
import { CartProduct } from '../../../../../models/cart-product';

@Component({
  selector: 'app-price-summary',
  standalone: true,
  imports: [],
  templateUrl: './price-summary.component.html',
  styleUrl: './price-summary.component.css'
})
export class PriceSummaryComponent implements OnInit {
  
  subtotal: number = 0;
  shipping: number = 0;
  tax: number = 0;
  total: number = 0;

  cartItems: CartProduct[] = [];
  
  constructor(private store: Store){}
  
  ngOnInit(): void {
    this.loadPricing();
  }

  loadPricing() {
		this.store.select(selectCartSubtotal).subscribe(subtotal => {
		  this.subtotal = subtotal;
		});

    this.store.select(selectCartTax).subscribe(tax => {
		  this.tax = tax;
		});

    this.store.select(selectCartShipping).subscribe(shipping => {
		  this.shipping = shipping;
		});
  
    this.total = this.subtotal + this.tax + this.shipping

	}
}
