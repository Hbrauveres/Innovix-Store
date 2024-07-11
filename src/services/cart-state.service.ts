import { Injectable, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { selectCartItems, selectShippingAddress } from '../app/state/cart/cart.selectors';
import { selectUser } from '../app/state/user/user.selectors';
import { CartProduct } from '../models/cart-product';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class CartStateService implements OnDestroy {
  userEmail: string = '';
  cartItems: CartProduct[] = [];
  shippingAddress: Address = {
    streetAddress: '',
    zipCode: '',
    city: '',
    state: '',
    neighborhood: '',
    additionalInformation: ''
  };;

  private userSubscription: Subscription | undefined;
  private cartItemsSubscription: Subscription | undefined;
  private shippingAddressSubscription: Subscription | undefined;

  constructor(private store: Store) {
    this.subscribeToUser();
    this.subscribeToCartItems();
    this.subscribeToShippingAddress();
  }

  ngOnDestroy(): void {
    this.unsubscribeFromUser();
    this.unsubscribeFromCartItems();
    this.unsubscribeFromShippingAddress();
  }

  private subscribeToUser(): void {
    this.userSubscription = this.store.pipe(select(selectUser)).subscribe(user => {
      this.userEmail = user?.email || '';
    });
  }

  private subscribeToCartItems(): void {
    this.cartItemsSubscription = this.store.pipe(select(selectCartItems)).subscribe(items => {
      this.cartItems = items;
    });
  }

  private subscribeToShippingAddress(): void {
    this.shippingAddressSubscription = this.store.pipe(select(selectShippingAddress)).subscribe(address => {
      if (address) {
        this.shippingAddress = { ...address };
      }
    });
  }

  private unsubscribeFromUser(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  private unsubscribeFromCartItems(): void {
    if (this.cartItemsSubscription) {
      this.cartItemsSubscription.unsubscribe();
    }
  }

  private unsubscribeFromShippingAddress(): void {
    if (this.shippingAddressSubscription) {
      this.shippingAddressSubscription.unsubscribe();
    }
  }
}