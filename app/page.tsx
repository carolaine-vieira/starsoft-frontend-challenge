// External dependencies
import type { Metadata } from 'next';

// Internal dependencies
import { HomeLayout } from '@/layouts/home/HomeLayout';
import { getProducts } from '@/services/product';

export const metadata: Metadata = {
	title: 'Starsoft',
};

async function Home() {
	// Fetching initial data to improve first load time
	const initialData = await getProducts({ rows: 8 });

	return <HomeLayout initialData={initialData} />;
}

export default Home;
