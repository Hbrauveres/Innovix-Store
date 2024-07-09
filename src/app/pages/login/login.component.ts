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
import { Store } from '@ngrx/store';
import { login } from '../../state/auth/auth.actions';

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
		private authService: AuthenticationService,
    private store: Store
	) {
		this.loginForm = new FormGroup({
			username: new FormControl(''),
			password: new FormControl(''),
		});
	}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
				username: ['', [Validators.required, Validators.email]],
				password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }

  async onSubmit(): Promise<void> {

    if (this.loginForm.invalid) {
      return;
    }

		const formData = this.loginForm.value;

    this.store.dispatch(login({ loginData: formData }));
  }
}