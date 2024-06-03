import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from '../../../../../models/product.model';

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

export class ProductsDisplayComponent implements OnInit{
  
  
  @Input() products!: Product[];
  
  constructor(){

  }

  ngOnInit(): void {
  }

  trackProduct(index: number, product: Product) {
    return product.id;
  }
}
