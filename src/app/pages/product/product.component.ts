import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Store } from '@ngrx/store';
import { ProductsState } from '../../state/product/product.state';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { selectProductById } from '../../state/product/product.selectors';
import { CartProduct } from '../../../models/cart-product';
import { addToCart, saveCart } from '../../state/cart/cart.actions';
import { CartStateService } from '../../../services/cart-state.service';

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
    	private store: Store<ProductsState>,
		private cartStateService: CartStateService
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
		if (this.product) {
			const cartProduct: CartProduct = {
				id: this.product.id,
				name: this.product.name,
				details: this.product.details,
				unitPrice: this.product.price,
				imageUrl: this.product.imageUrl,
				quantity: this.quantity
			};

			this.store.dispatch(addToCart({ product: cartProduct }));
			this.store.dispatch(saveCart({
				cartItems: this.cartStateService.cartItems,
				address: this.cartStateService.shippingAddress,
				email: this.cartStateService.userEmail
			  }));
			this.quantity = 1;
		}
	}
}
