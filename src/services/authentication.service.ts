import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationResponse } from "../models/responses/authentication-response.model";
import { AuthenticationRequest } from "../models/requests/authenticationRequest.model";
import { RegisterUserData } from "../models/register-user-data.model";
import { LoginData } from "../models/login-data.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  
  private API_BASE_URL = 'http://localhost:3000';

  constructor (private http:HttpClient){

  }

  login(authRequest: LoginData): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(`${this.API_BASE_URL}/api/login`, authRequest);
  }

  register(registerUserData: RegisterUserData){
    throw new Error("Method not implemented exception.");
  }
}