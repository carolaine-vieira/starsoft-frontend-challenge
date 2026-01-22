// External dependencies
import Image from 'next/image';

// Internal dependencies
import Styles from './CardProduct.module.scss';
import { CardProductProps } from './CardProduct.types';
import { Button } from '@/components/button/Button';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { addToCart, changeProductQuantity } from '@/store/cart.slice';

export const CardProduct = ({ className = '', ...product }: CardProductProps) => {
	const { cart } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	// Get the state item of product
	const productInCart = cart.find((cartProduct) => cartProduct.product.id === product.id);

	const handleAddToCart = () => {
		if (productInCart) {
			// If product is already on the cart just increment the quantity
			dispatch(
				changeProductQuantity({
					productId: product.id,
					ammount: 1,
				}),
			);
		} else {
			dispatch(
				addToCart({
					product,
					quantity: 1,
				}),
			);
		}
	};

	return (
		<article className={`card-product ${Styles.card} ${className}`}>
			<Image
				src={product.image}
				alt={`Product ${product.name} image`}
				width={400}
				height={400}
				className={Styles.image}
			/>

			<h3 dangerouslySetInnerHTML={{ __html: product.name }} className={Styles.name} />

			<p
				className={Styles.description}
				dangerouslySetInnerHTML={{ __html: product.description }}
			/>

			<div className={Styles.price}>
				<Image
					src={`/images/ellipse-icon.svg`}
					alt={`Currency icon`}
					width={29}
					height={29}
					quality={100}
				/>
				<span>{Math.trunc(product.price)} ETH</span>
			</div>

			<Button
				customProps={{ size: 'sm' }}
				onClick={handleAddToCart}
				className={Styles.button_add_cart}
			>
				{productInCart ? `(${productInCart.quantity}) na mochila` : 'Comprar'}
			</Button>
		</article>
	);
};
