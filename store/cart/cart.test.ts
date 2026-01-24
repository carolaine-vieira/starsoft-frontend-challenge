// Internal dependencies
import { CartState } from '@/types/cart';
import sidebarReducer, { addToCart, changeProductQuantity, deleteItem, setCart } from './slice';

// Mock Product
const mockProduct = {
	id: 0,
	name: 'Test',
	image: '/images/starsoft.svg',
	price: 132,
	createdAt: '',
	description: 'Test description',
};

describe('@redux: CartSlice', () => {
	it('returns initial state', () => {
		expect(sidebarReducer(undefined, { type: 'unknown' })).toEqual({
			cart: [],
		});
	});

	it('adds product to cart', () => {
		const state: CartState = { cart: [] };
		const newState = sidebarReducer(
			state,
			addToCart({
				product: mockProduct,
				quantity: 1,
			}),
		).cart;

		expect(newState).toHaveLength(1);
	});

	it('changes product quantity in cart', () => {
		const state: CartState = {
			cart: [
				{
					product: mockProduct,
					quantity: 1,
				},
			],
		};

		const newState = sidebarReducer(
			state,
			changeProductQuantity({
				productId: 0,
				ammount: 2,
			}),
		).cart;

		expect(newState[0].quantity).toBe(3);
	});

	it('removes product from cart when quantity is zero or below', () => {
		const state: CartState = {
			cart: [
				{
					product: mockProduct,
					quantity: 1,
				},
			],
		};

		const newState = sidebarReducer(
			state,
			changeProductQuantity({
				productId: 0,
				ammount: -10,
			}),
		).cart;

		expect(newState).toHaveLength(0);
	});

	it('maintains product quantity if productId was not found', () => {
		const state: CartState = {
			cart: [
				{
					product: mockProduct,
					quantity: 1,
				},
			],
		};

		const newState = sidebarReducer(
			state,
			changeProductQuantity({
				productId: 2,
				ammount: 2,
			}),
		).cart;

		expect(newState[0].quantity).toBe(1);
	});

	it('does not delete product if productId was not found', () => {
		const state: CartState = {
			cart: [
				{
					product: mockProduct,
					quantity: 1,
				},
			],
		};

		const newState = sidebarReducer(
			state,
			deleteItem({
				productId: 2,
			}),
		).cart;

		expect(newState).toHaveLength(1);
	});

	it('removes product from cart', () => {
		const state: CartState = {
			cart: [
				{
					product: mockProduct,
					quantity: 1,
				},
			],
		};
		const newState = sidebarReducer(state, deleteItem({ productId: 0 })).cart;

		expect(newState).toHaveLength(0);
	});

	it('overrides cart value', () => {
		const state: CartState = {
			cart: [],
		};
		const newState = sidebarReducer(
			state,
			setCart([
				{
					product: mockProduct,
					quantity: 1,
				},
				{
					product: mockProduct,
					quantity: 1,
				},
				{
					product: mockProduct,
					quantity: 1,
				},
			]),
		).cart;

		expect(newState).toHaveLength(3);
	});
});
