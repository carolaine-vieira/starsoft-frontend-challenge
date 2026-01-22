// External dependencies
import type { Metadata } from 'next';
import { dehydrate, QueryClient, HydrationBoundary } from '@tanstack/react-query';

// Internal dependencies
import { HomeLayout } from '@/layouts/home/HomeLayout';
import { getProducts } from '@/services/product';

export const metadata: Metadata = {
	title: 'Starsoft',
};

async function Home() {
	// Fetching initial data to improve first load time
	const queryClient = new QueryClient();

	await queryClient.prefetchInfiniteQuery({
		queryKey: ['products'],
		initialPageParam: 1,
		queryFn: ({ pageParam }) => getProducts({ page: pageParam as number }),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<HomeLayout />
		</HydrationBoundary>
	);
}

export default Home;
