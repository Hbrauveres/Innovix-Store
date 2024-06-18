// import { Component } from '@angular/core';
// import { formatDate } from '@angular/common';
// import { FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

// @Component({
// 	selector: 'app-register',
// 	standalone: true,
// 	imports: [
// 		ReactiveFormsModule
// 	],
// 	templateUrl: './register.component.html',
// 	styleUrl: './register.component.scss'
// })
// export class RegisterComponent {
	
// 	registerForm: FormGroup;
	
// 	constructor(private builder: FormBuilder) {
// 		this.registerForm = this.builder.group({
//       fullName: ['', Validators.required],
//       birthday: [formatDate(new Date(), 'yyyy-MM-dd', 'en'), Validators.required],
//       cpf: ['123.456.789-10', [Validators.required, Validators.pattern(/\d{3}\.\d{3}\.\d{3}-\d{2}/)]],
//       phone: ['(99) 99999-9999', [Validators.required, Validators.pattern(/\(\d{2}\) \d{5}-\d{4}/)]],
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(5)]]
//     });
// 	}

// 	// this.registerForm = this.builder.group({
// 	// 	fullName: this.builder.control('', Validators.required),
// 	// 	birthday: this.builder.control(formatDate(new Date(), 'dd-MM-yyyy', 'en'), Validators.required),
// 	// 	cpf: this.builder.control('123.456.789-10', Validators.compose([Validators.required, Validators.pattern(/\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}/)])),
// 	// 	phone: this.builder.control('(99) 99999-9999', Validators.compose([Validators.required, Validators.pattern(/\(\d{2}\) \d{5}-\d{4}/)])),
// 	// 	email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
// 	// 	password: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
// 	//  })

// 	onSubmit(){
// 		if(this.registerForm.valid){

// 		}
// 	}
// }

import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../../../utils/input-validation';
import { formatDate } from '@angular/common';
import { AuthenticationService } from '../../../services/authentication.service';
import axios from 'axios';

@Component({
  selector: 'app-register',
	standalone: true,
	imports:[
		ReactiveFormsModule
	],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form: FormGroup;
	successMessage: string | null = null;

  constructor(
		private formBuilder: FormBuilder,
		private authService: AuthenticationService,
		private router: Router
	) {
		this.form = new FormGroup({
			fullName: new FormControl(''),
			birthday: new FormControl(''),
			cpf: new FormControl(''),
			phone: new FormControl(''),
			email: new FormControl(''),
			password: new FormControl(''),
			confirmPassword: new FormControl(''),
		});
	}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        birthday: [
          formatDate(new Date(), 'dd-MM-yyyy', 'en'),
          [
            Validators.required,
          ],
        ],
        cpf: [
					'123.456.789-10',
					[
						Validators.required, 
						Validators.pattern(/\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}/)
					]
				],
				email: ['', [Validators.required, Validators.email]],
        phone: [
					'(99) 99999-9999', 
					[
						Validators.required, 
						Validators.pattern(/\(\d{2}\) \d{5}-\d{4}/)
					]
				],
				password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit(): Promise<void> {

    if (this.form.invalid) {
      return;
    }

		const formData = this.form.value;

		try {
      const response = await axios.post('http://localhost:8080/login/registerCostumer', formData);
      this.successMessage = 'Registration successful!';

			this.router.navigate(['/home']);
    } catch (error) {
      console.error('There was an error!', error);
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.form.reset();
  }
}