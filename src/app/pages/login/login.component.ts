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
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from '../../state/auth/auth.actions';
import { loadUser } from '../../state/user/user.actions';
import { selectUserToken } from '../../state/auth/auth.selectors';
import { filter, firstValueFrom, map, take } from 'rxjs';
import { loadCart } from '../../state/cart/cart.actions';

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
    private store: Store,
    private router: Router
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
				password: ['', [Validators.required, Validators.minLength(1)]],
      });
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.invalid) {
      return;
    }
  
    const formData = this.loginForm.value;
  
    this.store.dispatch(login({ loginData: formData }));
  
    // Wait for the authToken to be available
    const authToken: string = await firstValueFrom(this.store.select(selectUserToken)).then(token => token || '');
    const username: string = this.loginForm.get('username')!.value;
  
    this.store.dispatch(loadUser({ userEmail: username, token: authToken }));
    this.store.dispatch(loadCart({ userEmail: username }));
  }
}