import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { UserResponse } from '../models/responses/user-response.model';
import { Observable } from 'rxjs';
import { RegisterUserData } from '../models/register-user-data.model';
import { RegisterUserResponse } from '../models/responses/register-user-response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

   }

  API_BASE_URL = 'http://localhost:3000';

  getUser(userEmail: string, authToken: string): Observable<UserResponse>{
    console.log(`reached service get user call with auth token ${authToken}`);

    const headers = new HttpHeaders({
      'Authorization': authToken
    })
    
    console.log(`calling user with ${authToken}`);

    return this.http.get<UserResponse>(`${this.API_BASE_URL}/get-user`, 
      {
        headers,
        params: { email: userEmail }
      });
  }

  registerUser(userData: RegisterUserData): Observable<RegisterUserResponse>{
    return this.http.post<RegisterUserResponse>(`${this.API_BASE_URL}/register-user`, userData);
  }
}
