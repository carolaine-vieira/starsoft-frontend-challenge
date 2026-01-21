import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
	describe('Rendering', () => {
		it('renders with correct label', () => {
			render(<Button>Click me</Button>);
			expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
		});
	});

	describe('Interaction', () => {
		it('calls onClick when clicked', async () => {
			const user = userEvent.setup();
			const onClick = jest.fn();

			render(<Button onClick={onClick}>Click me</Button>);

			await user.click(screen.getByRole('button', { name: /click me/i }));

			expect(onClick).toHaveBeenCalledTimes(1);
		});
	});
});
