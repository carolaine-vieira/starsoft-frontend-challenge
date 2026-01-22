'use client';

// External dependencies
import { useInfiniteQuery } from '@tanstack/react-query';

// Internal dependencies
import { HomeLayoutProps } from './HomeLayout.types';
import { ListProduct } from '@/components/list-product/ListProduct';
import { getProducts } from '@/services/product';
import { ButtonLoadMore } from '@/components/button-load-more/ButtonLoadMore';

export const HomeLayout = ({}: HomeLayoutProps) => {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ['products'],
		initialPageParam: 1,
		queryFn: ({ pageParam }) => getProducts({ page: pageParam as number }),
		getNextPageParam: (lastPage) => {
			if (lastPage.currentPage < Math.ceil(lastPage.total / 8)) {
				return lastPage.currentPage + 1;
			}
			return undefined;
		},
	});

	// Concat products loaded
	const products = data?.pages.flatMap((page) => page.products) ?? [];

	// Calculate loaded products percentage
	const loadingProgress = data ? (products.length / data.pages[0].total) * 100 : '1%';

	return (
		<main id="content" className="main-content">
			<h1 className="sr-only">Starsoft Marketplace</h1>

			<ListProduct products={products} />

			<ButtonLoadMore
				onClick={() => fetchNextPage()}
				disabled={!hasNextPage}
				customProps={{
					label: 'Carregar mais',
					labelLoading: 'Buscando produtos',
					labelDisabled: 'Você já viu tudo',
					isLoading: isFetchingNextPage,
					variant: 'gray',
					size: 'lg',
					loadingProgress: `${loadingProgress}%`,
				}}
			/>
		</main>
	);
};
