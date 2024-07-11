import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCart, loadCartSuccess, loadCartFailure, calculateTax, saveCart, saveCartSuccess, saveCartFailure } from './cart.actions';
import { exhaustMap, map } from 'rxjs/operators';
import { CartResponse } from '../../../models/responses/cart-response.model';
import { CheckoutService } from '../../../services/checkout.service';
import { SaveCartResponse } from '../../../models/responses/save-cart-response.model';
import { Store } from '@ngrx/store';
import { CartState } from './cart.state';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private checkoutService: CheckoutService,
    private store: Store<CartState>
  ) {}

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCart),
      exhaustMap(action =>
        this.checkoutService.getCart(action.userEmail).pipe(
          map((response: CartResponse) => { 
          if (response.success) {
            return loadCartSuccess({ cart: response.cart });
          } else {
            return loadCartFailure({ error: response.error });
          }})
        )
      )
    )
  );

  saveCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(saveCart),
      exhaustMap(action =>
        this.checkoutService.saveCart(action.cartItems, action.address, action.email).pipe(
          map((response: SaveCartResponse) => { 
          if (response.success) {
            return saveCartSuccess();
          } else {
            return saveCartFailure({ error: response.error });
          }})
        )
      )
    )
  );
}
