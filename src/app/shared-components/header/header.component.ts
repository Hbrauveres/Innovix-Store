import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';
import { isLoggedIn } from '../../state/auth/auth.selectors';
import { logout } from '../../state/auth/auth.actions';
import { selectCartItemsQty } from '../../state/cart/cart.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  
  cartItemsQty: number = 0;

  constructor(private store:Store){
    
  }

  ngOnInit(): void {
    this.checkLogin();
    this.loadCartItemsQty();
  }
  
  loadCartItemsQty(){
    this.store.select(selectCartItemsQty).subscribe(itemsQty => {
      this.cartItemsQty = itemsQty;
    });
  }

  checkLogin(): boolean {
    let isLogged = false;
    
    this.store.select(isLoggedIn).subscribe(isLoggedIn => {
      isLogged = isLoggedIn;
    });

    return isLogged;
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
