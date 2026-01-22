'use client';

// External dependencies
import Image from 'next/image';
import { useEffect } from 'react';

// Internal dependencies
import Styles from './SidebarCart.module.scss';
import { ButtonCartProps } from './SidebarCart.types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { closeSidebar } from '@/store/sidebar.slice';
import { Button } from '@/components/button/Button';
import { ListProductCheckout } from '@/components/list-product-checkout/ListProductCheckout';

export const SidebarCart = ({ className = '' }: ButtonCartProps) => {
	const { cart } = useAppSelector((state) => state.cart);
	const { isOpen } = useAppSelector((state) => state.sidebar);
	const dispatch = useAppDispatch();

	// Sum total price of cart products
	const totalPrice = cart.reduce((accumulator, currentItem) => {
		return accumulator + currentItem.product.price * currentItem.quantity;
	}, 0);

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
	}, [isOpen]);

	return (
		<>
			{isOpen && <div className={Styles.overlay} onClick={() => dispatch(closeSidebar())} />}

			<aside
				id="checkout-sidebar"
				aria-hidden={!isOpen}
				className={`${Styles.sidebar} ${className} ${isOpen ? Styles.open : ''}`}
			>
				{/* Sidebar Header */}
				<div className={Styles.header}>
					<Button
						aria-controls="checkout-sidebar"
						aria-expanded={isOpen}
						title={'Close'}
						aria-label={'Close checkout sidebar'}
						customProps={{ variant: 'gray', size: 'sm' }}
						onClick={() => dispatch(closeSidebar())}
						className={Styles.button_toggle}
					>
						<Image src={'./images/arrow-left.svg'} alt="" width={30} height={30} />
					</Button>

					<h2 className={Styles.h2}>Mochila de Compras</h2>
				</div>

				{/* Sidebar Main Content */}
				<ListProductCheckout products={cart} />

				{/* Sidebar Footer */}
				<div className={Styles.total_sum}>
					{totalPrice > 0 ? (
						<>
							<b>Total</b>
							<span>
								<Image
									src={`/images/ellipse-icon.svg`}
									alt={`Currency icon`}
									width={29}
									height={29}
									quality={100}
								/>
								{totalPrice} ETH
							</span>
						</>
					) : (
						<p>Carrinho vazio</p>
					)}
				</div>
			</aside>
		</>
	);
};
