import { Component, OnInit } from '@angular/core';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PriceSummaryComponent } from './components/price-summary/price-summary.component';
import { OrderProductsComponent } from './components/order-products/order-products.component';
import { Store } from '@ngrx/store';
import { Cart } from '../../../models/cart.model';
import { OnIdentifyEffects } from '@ngrx/effects';
import { loadCart } from '../../state/cart/cart.actions';
import { User } from '../../../models/user.model';
import { selectUser } from '../../state/user/user.selectors';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ShippingComponent, PriceSummaryComponent, OrderProductsComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  constructor(private store: Store){}

  ngOnInit(): void {
    this.loadCartData();
  }

  loadCartData(){
    let userEmail: string = '';

    this.store.select(selectUser).subscribe(user => {
      userEmail = user?.email!;
    })
    
    this.store.dispatch(loadCart({userEmail: userEmail}))
  }
}


