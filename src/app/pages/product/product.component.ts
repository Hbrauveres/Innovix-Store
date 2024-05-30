import { Component } from '@angular/core';

@Component({
	selector: 'app-product',
	standalone: true,
	imports: [],
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent {
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
		// Lógica para adicionar ao carrinho
		console.log(`Adicionado ao carrinho: ${this.quantity} unidades`);
	}
}
