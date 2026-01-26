// External dependencies
import type { Metadata } from 'next';
import { dehydrate, QueryClient, HydrationBoundary } from '@tanstack/react-query';

// Internal dependencies
import { HomeLayout } from '@/layouts/home/HomeLayout';
import { getProducts } from '@/services/product';
import { Site } from '@/utils/config/site';

export const metadata: Metadata = {
	metadataBase: new URL(Site.SITE_URL),
	title: Site.NAME,
	description: 'Buy the best products with fast delivery and secure payment.',
	robots: {
		index: true,
		follow: true,
		'max-snippet': -1,
		'max-image-preview': 'large',
		'max-video-preview': -1,
	},
	alternates: {
		canonical: Site.SITE_URL,
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: Site.SITE_URL,
		siteName: Site.NAME,
		title: Site.NAME,
		description: 'Buy the best products with fast delivery and secure payment.',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: Site.NAME,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: Site.NAME,
		description: 'Buy the best products with fast delivery and secure payment.',
		images: ['/og-image.jpg'],
	},
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
