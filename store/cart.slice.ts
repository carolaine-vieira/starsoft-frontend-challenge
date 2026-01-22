import { CartChangeQuantity, CartItemState, CartState } from '@/types/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
			if (targetProduct) {
				targetProduct.quantity += payload.ammount;
			}
		},
	},
});

export const { setCart, addToCart, changeProductQuantity } = cartsSlice.actions;
export default cartsSlice.reducer;
