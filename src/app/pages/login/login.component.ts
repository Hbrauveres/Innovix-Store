import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import axios from 'axios';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  successMessage: string | null = null;

  constructor(
		private formBuilder: FormBuilder,
		private authService: AuthenticationService
	) {
		this.loginForm = new FormGroup({
			email: new FormControl(''),
			password: new FormControl(''),
		});
	}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
				email: ['', [Validators.required, Validators.email]],
				password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }

  async onSubmit(): Promise<void> {

    if (this.loginForm.invalid) {
      return;
    }

		const formData = this.loginForm.value;

		try {
      const response = await axios.post('http://localhost:8080/login', formData);
      console.log(JSON.stringify(this.loginForm.value, null, 2));
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
}