// External dependencies
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Internal dependencies
import { Footer } from './Footer';

describe('Footer', () => {
	describe('Rendering', () => {
		it('renders footer with text when passed', () => {
			render(<Footer text="Footer text" />);

			const button = screen.getByRole('contentinfo', { name: /Footer text/i });
			expect(button).toBeInTheDocument();
		});
	});
});
