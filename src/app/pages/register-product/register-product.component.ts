import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Store } from '@ngrx/store';
import { createProduct } from '../../state/product/product.actions';
import { RegisterProduct } from '../../../models/register-product.model';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterProductComponent implements OnInit{
  registerProductForm: FormGroup
  days: string[] = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  promotion: string = '0';

  constructor( private formBuilder: FormBuilder, private store: Store){
    this.registerProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      details: ['', Validators.required],
      imageUrl: ['', Validators.required],
      saleId: ['0'],
      validDays: [[]],
      endDate: [''],
      promoPrice: [''],
      minQuantity: ['']
    });
  }

  ngOnInit(): void {
    this.registerProductForm.get('saleId')!.valueChanges.subscribe(value => {
      this.onPromotionChange(value);
    });
  }

  onPromotionChange(promotion: string): void {
    this.promotion = promotion;
  }

  registerProduct(): void {

    if (!this.registerProductForm.valid){
      console.error('Form is invalid');
      
      return
    }

    let product = this.mapFormToProduct()

    this.store.dispatch(createProduct({product: product}));
  }

  mapFormToProduct(): RegisterProduct {
    const saleId = +this.registerProductForm.get('saleId')!.value

    const sale = saleId == 0 ? null : {
      saleId: saleId,
      validDays: this.registerProductForm.get('validDays')!.value,
      endDate: this.registerProductForm.get('endDate')!.value,
      price: this.registerProductForm.get('promoPrice')!.value,
      minQuantity: this.registerProductForm.get('minQuantity')!.value
    };

    const product: RegisterProduct = {
      id: '',
      name: this.registerProductForm.get('name')!.value,
      price: this.registerProductForm.get('price')!.value,
      quantityInStock: this.registerProductForm.get('quantity')!.value,
      details: this.registerProductForm.get('details')!.value,
      imageUrl: this.registerProductForm.get('imageUrl')!.value,
      sale: sale
    };

    return product;
  }
}
