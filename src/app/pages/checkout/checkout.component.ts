import { Component } from '@angular/core';
import { ShippingComponent } from './components/shipping/shipping.component';
import { PriceSummaryComponent } from './components/price-summary/price-summary.component';
import { OrderProductsComponent } from './components/order-products/order-products.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ShippingComponent, PriceSummaryComponent, OrderProductsComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {

}
