// External dependencies
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Internal dependencies
import { ListProduct } from './ListProduct';
import { renderWithProviders } from '@/shared/utils/tests/redux';

// Redux mock initial state
const preloadedState = {
	cart: {
		cart: [],
	},
	sidebar: {
		isOpen: true,
	},
};

const setup = (state: Record<string, any> = preloadedState, products: any[] = []) => {
	const { store } = renderWithProviders(<ListProduct products={products} />, {
		preloadedState: state,
	});

	return store;
};

describe('ListProduct', () => {
	describe('Rendering', () => {
		it('does not render section with empty array', () => {
			setup();

			const section = screen.queryByTestId('product-list');
			expect(section).not.toBeInTheDocument();
		});

		it('renders section when have products', () => {
			setup(preloadedState, [
				{
					id: 1,
					name: 'Product 1',
					image: '/images/product1.jpg',
					price: 100,
					createdAt: '2024-01-01',
					description: 'Description for Product 1',
				},
			]);

			const section = screen.queryByTestId('product-list');
			expect(section).toBeInTheDocument();
		});
	});
});
