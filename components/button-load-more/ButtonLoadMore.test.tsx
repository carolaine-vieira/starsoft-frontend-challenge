// External dependencies
import { render, screen } from '@testing-library/react';

// Internal dependencies
import { ButtonLoadMore } from './ButtonLoadMore';

const customProps = {
	label: 'Carregar mais',
	labelLoading: 'Buscando produtos',
	labelDisabled: 'Você já viu tudo',
	loadingProgress: '10%',
};

describe('ButtonLoadMore', () => {
	describe('Rendering', () => {
		it('renders with correct label', () => {
			render(<ButtonLoadMore customProps={customProps} />);
			expect(screen.getByRole('button', { name: /Carregar mais/i })).toBeInTheDocument();
		});

		it('renders with correct loading label when loading', () => {
			render(<ButtonLoadMore customProps={{ ...customProps, isLoading: true }} />);
			expect(screen.getByRole('button', { name: /Buscando produtos/i })).toBeInTheDocument();
		});

		it('renders with correct disabled label when disabled', () => {
			render(<ButtonLoadMore customProps={{ ...customProps }} disabled />);
			expect(screen.getByRole('button', { name: /Você já viu tudo/i })).toBeInTheDocument();
		});
	});
});
