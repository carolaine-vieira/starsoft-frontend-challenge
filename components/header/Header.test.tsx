// External dependencies
import { act, render, screen } from '@testing-library/react';

// Internal dependencies
import { Header } from './Header';

// Mock Next.js components
jest.mock('next/image', () => ({
	__esModule: true,
	default: (props: any) => <img {...props} />,
}));

jest.mock('next/link', () => ({
	__esModule: true,
	default: ({ href, children }: any) => <a href={href}>{children}</a>,
}));

jest.mock('@/components/button-cart/ButtonCart', () => ({
	ButtonCart: () => <button>Cart</button>,
}));

describe('Header', () => {
	it('renders the header with logo and cart button', () => {
		render(<Header />);

		expect(screen.getByRole('banner')).toBeInTheDocument();
		expect(screen.getByAltText(/starsoft logo/i)).toBeInTheDocument();
		expect(screen.getByRole('link')).toHaveAttribute('href', '/');
		expect(screen.getByText('Cart')).toBeInTheDocument();
	});

	it('does not have sticky class initially', () => {
		render(<Header />);

		const header = screen.getByRole('banner');
		expect(header?.className).not.toMatch(/sticked/i);
	});

	it('adds sticky class when scrolling past 100px', () => {
		render(<Header />);
		const header = screen.getByRole('banner');

		act(() => {
			// Scroll down
			window.scrollY = 110;
			window.dispatchEvent(new Event('scroll'));
		});

		expect(header?.className).toMatch(/sticked/i);
	});

	it('removes sticky class when scrolling back up', () => {
		render(<Header />);
		const header = screen.getByRole('banner');

		act(() => {
			// Scroll down
			window.scrollY = 110;
			window.dispatchEvent(new Event('scroll'));

			// Scroll up
			window.scrollY = 0;
			window.dispatchEvent(new Event('scroll'));
		});

		expect(header?.className).not.toMatch(/sticked/i);
	});
});
