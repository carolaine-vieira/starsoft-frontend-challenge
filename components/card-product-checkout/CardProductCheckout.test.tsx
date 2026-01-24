// External dependencies
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Internal dependencies
import { CardProductCheckout } from './CardProductCheckout';
import { renderWithProviders } from '@/utils/tests/redux';

// Mock props
const mockProduct = {
	id: 0,
	name: 'Test',
	image: '/images/starsoft.sg',
	price: 0,
	createdAt: '',
	description: 'Test description',
};

const preloadedState = {
	cart: {
		cart: [{ product: mockProduct, quantity: 2 }] as any[],
	},
};

const setup = (state: Record<string, any> = preloadedState) => {
	const { store } = renderWithProviders(
		<CardProductCheckout product={mockProduct} quantity={1} />,
		{
			preloadedState: state,
		},
	);

	return store;
};

describe('CardProductCheckout', () => {
	describe('Rendering', () => {
		it('renders product name', () => {
			setup();

			const heading = screen.getByRole('heading', { name: /Test/i });
			expect(heading).toBeInTheDocument();
		});
	});

	describe('Interaction', () => {
		it('decrease product quantity when click', () => {
			const store = setup();

			fireEvent.click(
				screen.getByRole('button', {
					name: /diminuir quantidade do produto/i,
				}),
			);
			const state = (store.getState() as typeof preloadedState).cart.cart;

			expect(state).toHaveLength(1);
			expect(state[0].product.id).toBe(mockProduct.id);
			expect(state[0].quantity).toBe(1);
		});

		it('increase product quantity when click', () => {
			const store = setup();

			fireEvent.click(
				screen.getByRole('button', {
					name: /aumentar quantidade do produto/i,
				}),
			);
			const state = (store.getState() as typeof preloadedState).cart.cart;

			expect(state).toHaveLength(1);
			expect(state[0].product.id).toBe(mockProduct.id);
			expect(state[0].quantity).toBe(3);
		});

		it('delete product when click', () => {
			const store = setup();

			fireEvent.click(
				screen.getByRole('button', {
					name: /deletar produto da mochil/i,
				}),
			);
			const state = (store.getState() as typeof preloadedState).cart.cart;

			expect(state).toHaveLength(0);
		});
	});
});
