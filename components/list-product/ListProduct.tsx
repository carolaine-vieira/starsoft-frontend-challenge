// Internal dependencies
import Styles from './ListProduct.module.scss';
import { ListProductProps } from './ListProduct.types';
import { CardProduct } from '@/components/card-product/CardProduct';

export const ListProduct = ({ className = '', products }: ListProductProps) => {
	if (products.length === 0) return <></>;

	return (
		<section data-testid="product-list" className={`product-list ${Styles.section} ${className}`}>
			<h2 className="sr-only">Products list</h2>

			<ul className={`product-list_wrapper container ${Styles.wrapper}`}>
				{products.map((product) => (
					<li key={product.id}>
						<CardProduct {...product} />
					</li>
				))}
			</ul>
		</section>
	);
};
