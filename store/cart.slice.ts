// External dependencies
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Internal dependencies
import { CartChangeQuantity, CartItemState, CartState } from '../shared/types/cart';

const initialState: CartState = {
	cart: [],
};

const cartsSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart(state, action: PayloadAction<CartItemState[]>) {
			state.cart = action.payload;
		},
		addToCart(state, { payload }: PayloadAction<CartItemState>) {
			state.cart = [...state.cart, payload];
		},
		changeProductQuantity(state, { payload }: PayloadAction<CartChangeQuantity>) {
			const targetProduct = state.cart.find(({ product }) => product.id === payload.productId);
			if (!targetProduct) return;

			const desiredQuantity = targetProduct.quantity + payload.ammount;

			if (desiredQuantity <= 0) {
				// If the quantity will be zero, remove the product
				state.cart = state.cart.filter((item) => item.product.id !== payload.productId);
			} else {
				// Otherwise just finish the change
				targetProduct.quantity = desiredQuantity;
			}
		},
		removeItem(state, { payload }: PayloadAction<{ productId: number }>) {
			const targetProduct = state.cart.find(({ product }) => product.id === payload.productId);
			if (!targetProduct) return;

			state.cart = state.cart.filter((item) => item.product.id !== payload.productId);
		},
	},
});

export const { setCart, addToCart, changeProductQuantity, removeItem } = cartsSlice.actions;
export default cartsSlice.reducer;
