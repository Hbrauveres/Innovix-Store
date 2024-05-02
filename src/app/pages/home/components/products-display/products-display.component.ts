import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-products-display',
  standalone: true,
  imports: [
    SearchBarComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './products-display.component.html',
  styleUrl: './products-display.component.css'
})
export class ProductsDisplayComponent {

}
