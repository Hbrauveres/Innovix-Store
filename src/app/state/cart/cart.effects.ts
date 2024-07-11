import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartService } from '../../services/cart.service';
import { loadCart, loadCartSuccess, loadCartFailure, addToCart, removeFromCart, updateCartItem, calculateTax, setShippingAddress } from '../actions/cart.actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private cartService: CartService
  ) {}

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCart),
      exhaustMap(() =>
        this.cartService.getCartItems().pipe(
          map(cartItems => loadCartSuccess({ cartItems })),
          catchError(error => of(loadCartFailure({ error })))
        )
      )
    )
  );
}
