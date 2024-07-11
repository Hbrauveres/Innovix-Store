import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from '../../../../../models/product.model';

@Component({
  selector: 'app-banner',
	standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.css']
})
export class BannerComponent implements OnInit {
  
	@Input() discountedProducts!: Product[];

  activeIndex = 0;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  isActive(index: number): boolean {
    return index === this.activeIndex;
  }

  navigate(direction: 'prev' | 'next'): void {
    if (direction === 'prev') {
      this.activeIndex = (this.activeIndex - 1 + this.discountedProducts.length) % this.discountedProducts.length;
    } else {
      this.activeIndex = (this.activeIndex + 1) % this.discountedProducts.length;
    }
  }
}