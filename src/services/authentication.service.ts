import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationResponse } from "../models/responses/authenticationResponse.model";
import { AuthenticationRequest } from "../models/requests/authenticationRequest.model";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor (private http:HttpClient){

  }

  async login(authRequest: AuthenticationRequest): Promise<AuthenticationResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(authRequest.login == "test" && authRequest.password == "123"){
            resolve({
                success: true,
                token: "eu-so-um-token-smile-face",
                errorMessage: ""
            });
        }
        else{
            resolve({
                success: false,
                token:"",
                errorMessage: "login fail"
            })
        }
      }, 1000);
    });
  }

  register(username:string, password:string){
    throw new Error("Method not implemented exception.");
  }
}