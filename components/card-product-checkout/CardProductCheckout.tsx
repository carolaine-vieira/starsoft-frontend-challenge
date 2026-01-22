// External dependencies
import Image from 'next/image';
import { motion } from 'framer-motion';

// Internal dependencies
import Styles from './CardProductCheckout.module.scss';
import { CardProductCheckoutProps } from './CardProductCheckout.types';
import { Button } from '@/components/button/Button';
import { useAppDispatch } from '@/hooks/redux';
import { changeProductQuantity, removeItem } from '@/store/cart.slice';

export const CardProductCheckout = ({
	className = '',
	...cartProduct
}: CardProductCheckoutProps) => {
	const { product, quantity } = cartProduct;
	const dispatch = useAppDispatch();

	return (
		<motion.article
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.4, ease: 'easeOut' }}
			className={`card-product ${Styles.card} ${className}`}
		>
			<div className={Styles.image}>
				<Image
					src={product.image}
					alt={`Product ${product.name} image`}
					width={161}
					height={161}
				/>
			</div>

			<div className={Styles.right_wrapper}>
				<h3
					dangerouslySetInnerHTML={{ __html: product.name }}
					className={`h2 ${Styles.name}`}
				/>

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
					<span className={Styles.price_text}>{Math.trunc(product.price)} ETH</span>
				</div>

				<div className={Styles.buttons_wrapper}>
					<div className={Styles.input_container}>
						<button
							className={Styles.button_decrease}
							onClick={() =>
								dispatch(
									changeProductQuantity({
										productId: product.id,
										ammount: -1,
									}),
								)
							}
						>
							-
						</button>

						<motion.span
							key={quantity}
							className={Styles.span}
							initial={{ scale: 0 }}
							animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
							transition={{ duration: 0.4, ease: 'easeOut' }}
						>
							{quantity}
						</motion.span>

						<button
							className={Styles.button_increase}
							onClick={() =>
								dispatch(
									changeProductQuantity({
										productId: product.id,
										ammount: 1,
									}),
								)
							}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</motion.article>
	);
};
