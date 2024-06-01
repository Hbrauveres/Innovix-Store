import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-shipping',
	standalone: true,
	imports: [],
	templateUrl: './shipping.component.html',
	styleUrl: './shipping.component.css'
})
export class ShippingComponent {
	isEditing = false;

	toggleEdit() {
		this.isEditing = !this.isEditing;
	}
}


