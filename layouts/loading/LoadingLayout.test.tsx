// External dependencies
import { render, screen } from '@testing-library/react';

// Internal dependencies
import LoadingLayout from './LoadingLayout';

// Mock next/image to render a normal img
jest.mock('next/image', () => ({
	__esModule: true,
	default: (props: any) => <img {...props} />,
}));

// Mock Spinner
jest.mock('@/components/spinner/Spinner', () => ({
	Spinner: () => <div data-testid="spinner" />,
}));

describe('LoadingLayout', () => {
	it('renders main container', () => {
		render(<LoadingLayout />);

		expect(screen.getByRole('main')).toBeInTheDocument();
	});

	it('renders the spinner', () => {
		render(<LoadingLayout />);

		expect(screen.getByTestId('spinner')).toBeInTheDocument();
	});
});
