import { Component, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Address } from '../../../../../models/address.model';
import { selectCartItems, selectShippingAddress } from '../../../../state/cart/cart.selectors';
import { FormsModule } from '@angular/forms';
import { saveCart, setShippingAddress } from '../../../../state/cart/cart.actions';
import { selectUser } from '../../../../state/user/user.selectors';
import { Cart } from '../../../../../models/cart.model';
import { CartProduct } from '../../../../../models/cart-product';

@Component({
	selector: 'app-shipping',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './shipping.component.html',
	styleUrl: './shipping.component.css'
})
export class ShippingComponent {
	isEditing = false;
	userEmail: string = '';
	cartItems: CartProduct[] = [];
	// displayShippingAddress: Address = {
    //     streetAddress: '',
    //     zipCode: '',
    //     city: '',
    //     state: '',
    //     neighborhood: '',
    //     additionalInformation: ''
    // };

	streetAddress: string = '';
	zipCode: string = '';
	city: string = '';
	state: string = '';
	neighborhood: string = '';
	additionalInformation: string = '';

	constructor(private store: Store){}

	toggleEdit() {
		this.isEditing = !this.isEditing;

		if(!this.isEditing){

			let updatedAddress: Address = { 
				streetAddress: this.streetAddress,
				zipCode: this.zipCode,
				city: this.city,
				state: this.state,
				neighborhood: this.neighborhood,
				additionalInformation: this.additionalInformation
			 };

			this.store.dispatch(setShippingAddress({address: updatedAddress}))
			this.store.dispatch(saveCart({
				cartItems:this.cartItems, 
				address: updatedAddress, 
				email: this.userEmail
			}))
		}
	}
  

	ngOnInit(): void {
		this.loadShippingAddress();
		this.loadUserEmail();
		this.loadCartItems();
	}

	loadUserEmail() {
		this.store.select(selectUser).subscribe(user => {
			this.userEmail = user?.email!;
		})
	}

	loadCartItems() {
		this.store.select(selectCartItems).subscribe(items => {
		  this.cartItems = items;
		});
	  }

	loadShippingAddress() {
		this.store.select(selectShippingAddress).subscribe(address => {
			if(!address){
				return
			}

			this.streetAddress = address.streetAddress,
			this.zipCode = address.zipCode,
			this.city = address.city,
			this.state = address.state,
			this.neighborhood = address.neighborhood,
			this.additionalInformation = address.additionalInformation
		});
	}
}


