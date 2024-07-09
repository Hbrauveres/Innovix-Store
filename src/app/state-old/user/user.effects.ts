import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { UserService } from "../../../services/user.service"
import { beginRegister } from "./user.actions"
import { exhaustMap, of, map, catchError } from "rxjs"
import { Router } from "@angular/router"

export class UserEffect{
    constructor(private action$: Actions, private service: UserService, private route: Router){

    }

    _userregister = createEffect(()=>
    this.action$.pipe(
        ofType(beginRegister),
        exhaustMap((action) => {
            return this.service.UserRegistration(action.userData).pipe(
                map(()=>{
                    this.route.navigate(['login']);
                    return showalert({message: 'Register Successfully.', resulttype: 'pass'})
                }),
                catchError((_error)=> of(showalert({message: 'Registration Failed.', resulttype: 'fail'})))
            )
        })
    )
    )
}