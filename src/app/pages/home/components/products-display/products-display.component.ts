import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from '../../../../../models/product.model';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../../../state/products/products.actions';
import { getProductsList } from '../../../../state/products/products.selector';

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
  
  public products!: Product[];
  
  constructor(private store:Store){

  }

  ngOnInit(): void {
    this.LoadInitialProducts();
  }

  LoadInitialProducts(){
    this.store.dispatch(loadProducts());

    this.store.select(getProductsList).subscribe(products => {
      this.products = products;
      console.log(products)
    });
  }

  trackProduct(index: number, product: Product) {
    return product.id;
  }
}
