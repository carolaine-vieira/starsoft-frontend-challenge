'use client';

// External dependencies
import Image from 'next/image';
import { motion } from 'framer-motion';

// Internal dependencies
import Styles from './ButtonCart.module.scss';
import { ButtonCartProps } from './ButtonCart.types';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { toggleSidebar } from '@/store/sidebar.slice';

export const ButtonCart = ({ className = '' }: ButtonCartProps) => {
	const { cart } = useAppSelector((state) => state.cart);
	const { isOpen } = useAppSelector((state) => state.sidebar);
	const dispatch = useAppDispatch();

	return (
		<button
			aria-expanded={isOpen}
			title={isOpen ? 'Fechar' : 'Abrir'}
			aria-label={isOpen ? 'Fechar a sidebar de checkout' : 'Abrir a sidebar de checkout'}
			className={`${Styles.button} ${className}`}
			onClick={() => dispatch(toggleSidebar())}
		>
			<Image src={'./images/bag.svg'} alt="Bag icon" width={33} height={33} />
			<motion.span
				key={cart.length}
				className={Styles.span}
				initial={{ scale: 0 }}
				animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
				transition={{ duration: 0.4, ease: 'easeOut' }}
			>
				{cart.length}
			</motion.span>
		</button>
	);
};
