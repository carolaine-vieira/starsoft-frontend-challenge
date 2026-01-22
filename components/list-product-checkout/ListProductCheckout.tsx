// Internal dependencies
import Styles from './ListProductCheckout.module.scss';
import { ListProductCheckoutProps } from './ListProductCheckout.types';
import { CardProductCheckout } from '@/components/card-product-checkout/CardProductCheckout';

export const ListProductCheckout = ({ className = '', products }: ListProductCheckoutProps) => {
	return (
		<ul className={`list-procut-checkout ${Styles.list} ${className}`}>
			{products.map((product) => (
				<li key={product.product.id}>
					<CardProductCheckout {...product} />
				</li>
			))}
		</ul>
	);
};
