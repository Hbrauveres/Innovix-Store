export interface CartState {
    items: any[];
    loading: boolean;
    error: any;
    tax: number;
    shippingAddress: any;
  }
  
  export const initialCartState: CartState = {
    items: [],
    loading: false,
    error: null,
    tax: 0,
    shippingAddress: null,
  };
  