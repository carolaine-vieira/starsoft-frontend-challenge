import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonLoadMore } from './ButtonLoadMore';

describe('ButtonLoadMore', () => {
	describe('Rendering', () => {
		it('renders with correct label', () => {
			render(<ButtonLoadMore>Click me</ButtonLoadMore>);
			expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
		});
	});

	describe('Interaction', () => {
		it('calls onClick when clicked', async () => {
			const user = userEvent.setup();
			const onClick = jest.fn();

			render(<ButtonLoadMore onClick={onClick}>Click me</ButtonLoadMore>);

			await user.click(screen.getByRole('button', { name: /click me/i }));

			expect(onClick).toHaveBeenCalledTimes(1);
		});
	});
});
