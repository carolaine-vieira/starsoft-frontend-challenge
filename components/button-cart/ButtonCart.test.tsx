// External dependencies
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Internal dependencies
import { ButtonCart } from './ButtonCart';
import { renderWithProviders } from '@/utils/tests/redux';

const preloadedState = {
	sidebar: {
		isOpen: true,
	},
	cart: {
		cart: [],
	},
};

const setup = (state = preloadedState) => {
	const { store } = renderWithProviders(<ButtonCart />, {
		preloadedState: state,
	});

	return store;
};

describe('ButtonCart', () => {
	describe('Rendering', () => {
		it('shows close labels when sidebar is open', () => {
			setup();

			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('title', 'Fechar');
			expect(button).toHaveAttribute('aria-label', 'Fechar a sidebar de checkout');
		});

		it('shows open labels when sidebar is closed', () => {
			setup({
				...preloadedState,
				sidebar: {
					isOpen: false,
				},
			});

			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('title', 'Abrir');
			expect(button).toHaveAttribute('aria-label', 'Abrir a sidebar de checkout');
		});
	});

	describe('Interaction', () => {
		it('toggles sidebar state when clicked', () => {
			const store = setup();

			fireEvent.click(screen.getByRole('button'));

			const state = (store.getState() as typeof preloadedState).sidebar;
			expect(state.isOpen).toBe(false);
		});
	});
});
