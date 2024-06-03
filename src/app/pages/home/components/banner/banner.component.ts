import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from '../../../../../models/product.model';

@Component({
  selector: 'app-banner',
	standalone: true,
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.css']
})
export class BannerComponent implements OnInit {
  
	@Input() discountedProducts!: Product[];

  activeIndex = 0;

  constructor() { }

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