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
import { RegisterUserData } from '../../../models/register-user-data.model';
import { registerUser } from '../../state/user/user.actions';
import { Store } from '@ngrx/store';

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
    private store: Store,
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

  mapFormToRegisterUserData(formData: any): RegisterUserData {
    return {
      fullName: formData.fullName,
      birthday: formData.birthday,
      cpf: formData.cpf,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
      type: 'CUSTOMER',
      id: 0,
    };
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

		const formData = this.form.value;
    const userData = this.mapFormToRegisterUserData(formData);

		this.store.dispatch(registerUser({ registerUserData: userData }));
  }

  onReset(): void {
    this.form.reset();
  }
}