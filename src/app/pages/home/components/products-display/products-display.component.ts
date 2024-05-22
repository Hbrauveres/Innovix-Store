import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '../../../../../services/product.service';
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
  
  private products!: Product[];
  
  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
    this.LoadInitialProducts();
  }

  LoadInitialProducts(){
    this.productService.getAll().subscribe(product => {
      this.products = product;
      console.log(this.products)
    });
  }
}
