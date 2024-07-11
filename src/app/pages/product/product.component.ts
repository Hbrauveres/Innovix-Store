import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Store } from '@ngrx/store';
import { ProductsState } from '../../state/product/product.state';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { selectProductById } from '../../state/product/product.selectors';

@Component({
	selector: 'app-product',
	standalone: true,
	imports: [],
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	
	product!: Product | null;
	
	constructor(
		private route: ActivatedRoute,
    	private store: Store<ProductsState>
	) {}
	
	ngOnInit(): void {
		this.loadProduct();
	}
	
	loadProduct(): void {
		this.route.paramMap.pipe(
			map(params => params.get('productId')),
			switchMap(productId => this.store.select(selectProductById(productId!)))
		  ).subscribe(product => {
			this.product = product!;
		  });
	}
	
	quantity: number = 1;

	increaseQuantity() {
		this.quantity++;
	}

	decreaseQuantity() {
		if (this.quantity > 1) {
			this.quantity--;
		}
	}

	addToCart() {
	}
}
