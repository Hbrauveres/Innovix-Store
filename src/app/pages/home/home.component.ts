import { Component } from '@angular/core';
import { ProductsDisplayComponent } from './components/products-display/products-display.component';
import { BannerComponent } from './components/banner/banner.component';
import { CounterComponent } from '../../counter/counter.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsDisplayComponent, BannerComponent, CounterComponent, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
