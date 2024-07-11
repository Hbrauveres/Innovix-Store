import { Address } from "../../../models/address.model";
import { CartProduct } from "../../../models/cart-product";


export interface CartState {
    items: CartProduct[];
    shippingAdrress: Address | null;
    tax: number;
    shippingPrice: number;
    loading: boolean;
    error: any;
  }
  
  export const initialCartState: CartState = {
    items: [],
    shippingAdrress: null,
    tax: 0,
    shippingPrice: 0,
    loading: false,
    error: null
  };
  