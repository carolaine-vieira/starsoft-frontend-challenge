// External dependencies
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

// Internal dependencies
import { SidebarCart } from './SidebarCart';
import { renderWithProviders } from '@/utils/tests/redux';

// Mock props
const mockProduct = {
	id: 0,
	name: 'Test',
	image: '/images/starsoft.sg',
	price: 132,
	createdAt: '',
	description: 'Test description',
};

const preloadedState = {
	cart: {
		cart: [{ product: mockProduct, quantity: 1 }],
	},
	sidebar: {
		isOpen: true,
	},
};

const setup = (state: Record<string, any> = preloadedState) => {
	const { store } = renderWithProviders(<SidebarCart />, {
		preloadedState: state,
	});

	return store;
};

describe('SidebarCart', () => {
	describe('Rendering', () => {
		it('renders total price when cart is not empty', () => {
			setup();

			const element = screen.getByTestId('total-price');
			expect(element).toBeInTheDocument();
			expect(element).toHaveTextContent('Total132 ETH');
		});

		it('renders empty cart message when cart is empty', () => {
			setup({
				...preloadedState,
				cart: {
					cart: [],
				},
			});

			const element = screen.getByTestId('empty-cart-message');
			expect(element).toBeInTheDocument();
			expect(element).toHaveTextContent('Mochila vazia');
		});

		it('renders complete checkout button with correct label when cart is empty', () => {
			setup({
				...preloadedState,
				cart: {
					cart: [],
				},
			});

			const button = screen.getByRole('button', {
				name: /finalizar compra/i,
			});
			expect(button).toBeInTheDocument();
		});

		it('renders complete checkout button with correct attributes when cart is empty', () => {
			setup({
				...preloadedState,
				cart: {
					cart: [],
				},
			});

			const button = screen.getByRole('button', {
				name: /finalizar compra/i,
			});
			expect(button).toHaveAttribute('disabled');
			expect(button).toHaveAttribute(
				'title',
				'Adicione produtos na mochila para finalizar a compra',
			);
		});

		it('renders complete checkout button with correct attributes when purchase is finished', () => {
			setup();

			const button = screen.getByRole('button', {
				name: /finalizar compra/i,
			});
			fireEvent.click(button);

			expect(button).toHaveAttribute('disabled');
			expect(button).toHaveAttribute(
				'title',
				'Adicione produtos na mochila para finalizar a compra',
			);
			expect(button).toHaveTextContent('Compra finalizada!');
		});

		it('renders overlay when sidebar is open', () => {
			setup({
				...preloadedState,
				sidebar: {
					isOpen: true,
				},
			});

			const element = screen.getByTestId('overlay');
			expect(element).toBeInTheDocument();
		});
	});

	describe('Interaction', () => {
		it('close sidebar when click', () => {
			const store = setup();

			fireEvent.click(
				screen.getByRole('button', {
					name: /close checkout sidebar/i,
				}),
			);
			const state = (store.getState() as typeof preloadedState).sidebar.isOpen;
			expect(state).toBe(false);
		});

		it('clear cart when click', () => {
			const store = setup();

			fireEvent.click(
				screen.getByRole('button', {
					name: /finalizar compra/i,
				}),
			);
			const state = (store.getState() as typeof preloadedState).cart.cart;
			expect(state).toHaveLength(0);
		});

		it('close overlay when click', () => {
			setup();

			const button = screen.getByRole('button', {
				name: /fechar sidebar de checkout/i,
			});
			fireEvent.click(button);
			expect(button).not.toBeInTheDocument();
		});
	});
});
