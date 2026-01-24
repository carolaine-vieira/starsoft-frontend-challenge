// External dependencies
import { screen, fireEvent, render } from '@testing-library/react';
import { ButtonCart } from './ButtonCart';

// Internal dependencies
import { toggleSidebar } from '@/store/sidebar.slice';

// Redux mock initial state
const preloadedState = {
	cart: {
		cart: [],
	},
	sidebar: {
		isOpen: true,
	},
};

// Mock Redux hooks functions
const mockDispatch = jest.fn();
const mockSelector = jest.fn();

// Mock Redux hooks
jest.mock('@/hooks/redux', () => ({
	useAppDispatch: () => mockDispatch,
	useAppSelector: (selector: any) => mockSelector(selector),
}));

describe('ButtonCart', () => {
	describe('Rendering', () => {
		it('has correct title and aria-label attribute when sidebar is closed', () => {
			mockSelector.mockImplementation((selector) => selector(preloadedState));
			render(<ButtonCart />);

			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('title', 'Fechar');
			expect(button).toHaveAttribute('aria-label', 'Fechar a sidebar de checkout');
		});

		it('has correct title and aria-label attribute when sidebar is open', () => {
			mockSelector.mockImplementation((selector) =>
				selector({
					...preloadedState,
					sidebar: {
						isOpen: false,
					},
				}),
			);
			render(<ButtonCart />);

			const button = screen.getByRole('button');
			expect(button).toHaveAttribute('title', 'Abrir');
			expect(button).toHaveAttribute('aria-label', 'Abrir a sidebar de checkout');
		});
	});

	describe('Interaction', () => {
		it('calls toggleSidebar function when clicked', () => {
			mockSelector.mockImplementation((selector) => selector(preloadedState));
			render(<ButtonCart />);

			fireEvent.click(screen.getByRole('button'));
			expect(mockDispatch).toHaveBeenCalledWith(toggleSidebar());
		});
	});
});
