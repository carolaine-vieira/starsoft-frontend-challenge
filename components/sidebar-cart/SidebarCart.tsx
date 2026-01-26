'use client';

// External dependencies
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Internal dependencies
import Styles from './SidebarCart.module.scss';
import { ButtonCartProps } from './SidebarCart.types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { closeSidebar } from '@/store/sidebar/slice';
import { setCart } from '@/store/cart/slice';
import { Button } from '@/components/button/Button';
import { ListProductCheckout } from '@/components/list-product-checkout/ListProductCheckout';

export const SidebarCart = ({ className = '' }: ButtonCartProps) => {
	const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

	const { cart } = useAppSelector((state) => state.cart);
	const { isOpen } = useAppSelector((state) => state.sidebar);
	const dispatch = useAppDispatch();

	// Sum total price of cart products
	const totalPrice = cart.reduce((accumulator, currentItem) => {
		return accumulator + currentItem.product.price * currentItem.quantity;
	}, 0);

	const handleCompleteCheckout = () => {
		setIsCheckoutComplete(true);
		dispatch(setCart([]));

		// Reset checkout state after 2 seconds
		/* istanbul ignore next */
		setTimeout(() => {
			setIsCheckoutComplete(false);
		}, 2000);
	};

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : 'auto';
	}, [isOpen]);

	return (
		<>
			{/* Overlay */}
			{isOpen && (
				<div data-testid="overlay" className={Styles.overlay}>
					<button
						type="button"
						className="stretched-link"
						aria-label="Fechar sidebar de checkout"
						aria-controls="checkout-sidebar"
						aria-expanded={isOpen}
						onClick={() => dispatch(closeSidebar())}
					/>
				</div>
			)}

			<aside
				id="checkout-sidebar"
				aria-hidden={!isOpen}
				className={`${Styles.sidebar} ${className} ${isOpen ? Styles.open : ''}`}
			>
				{/* Sidebar Header */}
				<div className={Styles.header}>
					{isOpen && (
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
					)}

					<h2 className={Styles.h2}>Mochila de Compras</h2>
				</div>

				{/* Sidebar Main Content */}
				<ListProductCheckout products={cart} />

				{/* Sidebar Footer */}
				<div className={Styles.total_sum}>
					{totalPrice > 0 ? (
						<div data-testid="total-price">
							<b>Total</b>
							<span>
								<Image
									src={`/images/ellipse-icon.svg`}
									alt={`Currency icon`}
									width={29}
									height={29}
								/>
								{totalPrice} ETH
							</span>
						</div>
					) : (
						<p data-testid="empty-cart-message">Mochila vazia</p>
					)}
				</div>

				{/* Complete Checkout Button */}
				<Button
					onClick={handleCompleteCheckout}
					className={Styles.button_checkout}
					disabled={cart.length === 0 || isCheckoutComplete}
					title={
						cart.length === 0
							? 'Adicione produtos na mochila para finalizar a compra'
							: undefined
					}
				>
					{isCheckoutComplete ? 'Compra finalizada!' : 'Finalizar compra'}
				</Button>
			</aside>
		</>
	);
};
