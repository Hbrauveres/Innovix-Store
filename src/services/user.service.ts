import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

   }

  API_BASE_URL = 'http://localhost:3000';

  UserRegistration(userData: User){
    return this.http.post(`${this.API_BASE_URL}/register-user`, userData);
  }
}
