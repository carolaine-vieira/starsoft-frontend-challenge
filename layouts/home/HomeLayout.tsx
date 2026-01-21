// External dependencies
import React from 'react';

// Internal dependencies
import { HomeLayoutProps } from './HomeLayout.types';
import { ListProduct } from '@/components/list-product/ListProduct';

export const HomeLayout = ({ initialData }: HomeLayoutProps) => {
	return (
		<main id="content" className="main-content">
			<h1 className="sr-only">Starsoft Marketplace</h1>

			<ListProduct initialData={initialData} />
		</main>
	);
};
