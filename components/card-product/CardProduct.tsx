// External dependencies
import React from 'react';
import Image from 'next/image';

// Internal dependencies
import Styles from './CardProduct.module.scss';
import { CardProductProps } from './CardProduct.types';

export const CardProduct = ({
	className = '',
	image,
	name,
	description,
	price,
	id,
}: CardProductProps) => {
	return (
		<article className={`card-product ${Styles.card} ${className}`}>
			<Image
				src={image}
				alt={`Product ${name} image`}
				width={400}
				height={400}
				className={Styles.image}
			/>

			<h3 dangerouslySetInnerHTML={{ __html: name }} className={`h2 ${Styles.name}`} />

			<p className={Styles.description} dangerouslySetInnerHTML={{ __html: description }} />

			<div className={Styles.price}>
				<Image
					src={`/elipse-icon.png`}
					alt={`Currency icon`}
					width={29}
					height={29}
					quality={100}
				/>
				<span className={Styles.price_text}>{Math.trunc(price)} ETH</span>
			</div>
		</article>
	);
};
