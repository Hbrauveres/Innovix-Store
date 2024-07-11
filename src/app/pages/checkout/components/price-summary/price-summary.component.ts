import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-price-summary',
  standalone: true,
  imports: [],
  templateUrl: './price-summary.component.html',
  styleUrl: './price-summary.component.css'
})
export class PriceSummaryComponent {
  constructor(private store: Store){}
}
