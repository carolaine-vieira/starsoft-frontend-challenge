// External dependencies
import { render, screen, fireEvent } from '@testing-library/react';
import { useInfiniteQuery } from '@tanstack/react-query';

// Internal dependencies
import { HomeLayout } from './HomeLayout';

// Mock React Query
jest.mock('@tanstack/react-query', () => ({
	useInfiniteQuery: jest.fn(),
}));

// Mock ListProduct
jest.mock('@/components/list-product/ListProduct', () => ({
	ListProduct: ({ products }: any) => (
		<div data-testid="list-product">
			{products.map((p: any) => (
				<span key={p.id}>{p.name}</span>
			))}
		</div>
	),
}));

// Mock ButtonLoadMore
jest.mock('@/components/button-load-more/ButtonLoadMore', () => ({
	ButtonLoadMore: ({ onClick, disabled, customProps }: any) => (
		<button onClick={onClick} disabled={disabled}>
			{customProps.isLoading
				? customProps.labelLoading
				: disabled
					? customProps.labelDisabled
					: customProps.label}
		</button>
	),
}));

const mockUseInfiniteQuery = useInfiniteQuery as jest.Mock;

describe('HomeLayout', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('Rendering', () => {
		it('renders main layout structure', () => {
			mockUseInfiniteQuery.mockReturnValue({
				data: undefined,
				fetchNextPage: jest.fn(),
				hasNextPage: true,
				isFetchingNextPage: false,
			});

			render(<HomeLayout />);

			expect(screen.getByRole('main')).toBeInTheDocument();
			expect(screen.getByRole('heading', { name: /starsoft marketplace/i })).toBeInTheDocument();
			expect(screen.getByTestId('list-product')).toBeInTheDocument();
			expect(screen.getByText('Carregar mais')).toBeInTheDocument();
		});

		it('renders products from query data', () => {
			mockUseInfiniteQuery.mockReturnValue({
				data: {
					pages: [
						{
							currentPage: 1,
							total: 16,
							products: [
								{ id: 1, name: 'Product 1' },
								{ id: 2, name: 'Product 2' },
							],
						},
					],
				},
				fetchNextPage: jest.fn(),
				hasNextPage: true,
				isFetchingNextPage: false,
			});

			render(<HomeLayout />);

			expect(screen.getByText('Product 1')).toBeInTheDocument();
			expect(screen.getByText('Product 2')).toBeInTheDocument();
		});

		it('shows loading state while fetching next page', () => {
			mockUseInfiniteQuery.mockReturnValue({
				data: {
					pages: [
						{
							currentPage: 1,
							total: 8,
							products: [{ id: 1, name: 'Product 1' }],
						},
					],
				},
				fetchNextPage: jest.fn(),
				hasNextPage: true,
				isFetchingNextPage: true,
			});

			render(<HomeLayout />);

			expect(screen.getByText('Buscando produtos')).toBeInTheDocument();
		});

		it('disables load more button when there is no next page', () => {
			mockUseInfiniteQuery.mockReturnValue({
				data: {
					pages: [
						{
							currentPage: 1,
							total: 1,
							products: [{ id: 1, name: 'Product 1' }],
						},
					],
				},
				fetchNextPage: jest.fn(),
				hasNextPage: false,
				isFetchingNextPage: false,
			});

			render(<HomeLayout />);

			const button = screen.getByText('Você já viu tudo');
			expect(button).toBeDisabled();
		});
	});

	describe('Interaction', () => {
		it('calls fetchNextPage when clicking "load more"', () => {
			const fetchNextPage = jest.fn();

			mockUseInfiniteQuery.mockReturnValue({
				data: {
					pages: [
						{
							currentPage: 1,
							total: 8,
							products: [{ id: 1, name: 'Product 1' }],
						},
					],
				},
				fetchNextPage,
				hasNextPage: true,
				isFetchingNextPage: false,
			});

			render(<HomeLayout />);

			fireEvent.click(screen.getByText('Carregar mais'));

			expect(fetchNextPage).toHaveBeenCalledTimes(1);
		});
	});
});
