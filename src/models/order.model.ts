import { OrderProduct } from "./order-product.model";

export interface Order {
    orderNumber: string;
    date: string;
    products: OrderProduct[];
}