// External dependencies
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Internal dependencies
import Styles from './ListProduct.module.scss';
import { ListProductProps } from './ListProduct.types';
import { CardProduct } from '@/components/card-product/CardProduct';

export const ListProduct = ({ className = '', initialData }: ListProductProps) => {
	return (
		<section className={`product-list ${Styles.section} ${className}`}>
			<h2 className="sr-only">Products list</h2>

			<div className={`product-list_wrapper container ${Styles.wrapper}`}>
				{initialData.products.map((product) => (
					<CardProduct key={product.id} {...product} />
				))}
			</div>
		</section>
	);
};
