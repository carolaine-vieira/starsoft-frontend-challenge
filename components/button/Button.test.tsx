// External dependencies
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Internal dependencies
import { Button } from './Button';

// Mock Spinner to avoid testing its implementation
jest.mock('@/components/spinner/Spinner', () => ({
	Spinner: () => <div data-testid="spinner" />,
}));

describe('Button', () => {
	describe('Rendering', () => {
		it('renders a button with children', () => {
			render(<Button>Click me</Button>);

			const button = screen.getByRole('button', { name: /click me/i });
			expect(button).toBeInTheDocument();
		});

		it('is enabled by default', () => {
			render(<Button>Button</Button>);

			const button = screen.getByRole('button');
			expect(button).not.toBeDisabled();
			expect(button).not.toHaveAttribute('aria-disabled');
		});

		it('is disabled when disabled prop is true', () => {
			render(<Button disabled>Button</Button>);

			const button = screen.getByRole('button');
			expect(button).toBeDisabled();
			expect(button).toHaveAttribute('aria-disabled', 'true');
		});

		it('is disabled when loading', () => {
			render(<Button customProps={{ isLoading: true }}>Button</Button>);

			const button = screen.getByRole('button');
			expect(button).toBeDisabled();
			expect(button).toHaveAttribute('aria-disabled', 'true');
			expect(button).toHaveAttribute('aria-busy', 'true');
		});

		it('renders spinner when loading', () => {
			render(<Button customProps={{ isLoading: true }}>Button</Button>);
			expect(screen.getByTestId('spinner')).toBeInTheDocument();
		});

		it('does not render spinner when not loading', () => {
			render(<Button>Button</Button>);
			expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
		});

		it('applies size and variant classes when provided', () => {
			const { container } = render(
				<Button customProps={{ size: 'lg', variant: 'gray' }}>Button</Button>,
			);

			const button = container.querySelector('button');
			expect(button).toBeTruthy();
			expect(button?.className).toContain('lg');
			expect(button?.className).toContain('gray');
		});

		it('falls back to default size and variant when not provided', () => {
			const { container } = render(<Button>Button</Button>);

			const button = container.querySelector('button');
			expect(button).toBeTruthy();
			expect(button?.className).toContain('sm');
			expect(button?.className).toContain('primary');
		});
	});

	describe('Interaction', () => {
		it('calls onClick when enabled', () => {
			const onClick = jest.fn();

			render(<Button onClick={onClick}>Button</Button>);

			fireEvent.click(screen.getByRole('button'));
			expect(onClick).toHaveBeenCalledTimes(1);
		});

		it('does not call onClick when disabled', () => {
			const onClick = jest.fn();

			render(
				<Button disabled onClick={onClick}>
					Button
				</Button>,
			);

			fireEvent.click(screen.getByRole('button'));
			expect(onClick).not.toHaveBeenCalled();
		});
	});
});
