import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationResponse } from '../models/responses/authenticationResponse.model';
import { AuthenticationRequest } from '../models/requests/authenticationRequest.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  async login(
    authRequest: AuthenticationRequest
  ): Promise<AuthenticationResponse> {
    const customer: Customer = {
      code: '1234',
      name: 'Enzo',
      email: 'enzo@gmail.com',
      address: 'Minha Rua Linda',
      phone: '51996584708',
      authToken: 'eu-so-um-token-smile-face',
      errorMessage: 'error-msg',
    };
    return new Promise((resolve) => {
      setTimeout(() => {
        if (authRequest.login == 'test' && authRequest.password == '123') {
          resolve({
            success: true,
            customer: customer,
            errorMessage: '',
          });
        } else {
          resolve({
            success: false,
            customer: null,
            errorMessage: 'login fail',
          });
        }
      }, 1000);
    });
  }
}
