// External dependencies
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Internal dependencies
import { CardProduct } from './CardProduct';
import { renderWithProviders } from '@/utils/tests/redux';

// Mock props
const mockProduct = {
	id: 0,
	name: 'Test',
	image: '/images/starsoft.svg',
	price: 0,
	createdAt: '',
	description: 'Test description',
};

const preloadedState = {
	cart: {
		cart: [] as any[],
	},
};

const setup = (state: Record<string, any> = preloadedState) => {
	const { store } = renderWithProviders(<CardProduct {...mockProduct} />, {
		preloadedState: state,
	});

	return store;
};

describe('CardProduct', () => {
	describe('Rendering', () => {
		it('renders product name', () => {
			setup();

			const heading = screen.getByRole('heading', { name: /Test/i });
			expect(heading).toBeInTheDocument();
		});
	});

	describe('Interaction', () => {
		it('add product to cart when click on add to cart button', () => {
			const store = setup();

			fireEvent.click(screen.getByRole('button'));
			const state = (store.getState() as typeof preloadedState).cart.cart;

			expect(state).toHaveLength(1);
			expect(state[0].product.id).toBe(mockProduct.id);
			expect(state[0].quantity).toBe(1);
		});

		it('deletes product when product is in cart and reclick on buy button', () => {
			const store = setup({
				cart: {
					cart: [
						{
							product: mockProduct,
							quantity: 1,
						},
					],
				},
			});

			fireEvent.click(screen.getByRole('button'));
			const state = (store.getState() as typeof preloadedState).cart.cart;

			expect(state).toHaveLength(0);
		});
	});
});
