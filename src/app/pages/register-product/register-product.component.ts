import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css'],
  standalone: true, // Define como standalone
  imports: [CommonModule, ReactiveFormsModule] // Importa CommonModule e ReactiveFormsModule diretamente no componente
})
export class RegisterProductComponent {
  productForm: FormGroup;
  promotion: string = '';
  days: string[] = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      unitPrice: [''],
      image: [''], // campo para a imagem do produto
      promotion: ['nenhuma'],
      validDays: [''],
      endDate: [''],
      minQuantity: [''],
      promoPrice: [''],
      promotionBanner: [''] // campo para o banner de promoção
    });
  }

  onPromotionChange(event: any): void {
    this.promotion = event.target.value;
  }

  onSubmit(): void {
    console.log(this.productForm.value);
  }
}
