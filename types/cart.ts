import { Product } from './product';

export interface CartItemState {
	product: Product;
	quantity: number;
}

export interface CartState {
	cart: CartItemState[];
}

export interface CartChangeQuantity {
	productId: number;
	ammount: number;
}
