import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from '../../../../../models/product.model';

@Component({
  selector: 'app-products-display',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './products-display.component.html',
  styleUrl: './products-display.component.css'
})

export class ProductsDisplayComponent implements OnInit{
  
  
  @Input() products!: Product[];

  public displayProducts!: Product[];
  
  constructor(){

  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.displayProducts = this.products;
  }

  trackProduct(index: number, product: Product) {
    return product.id;
  }
}
