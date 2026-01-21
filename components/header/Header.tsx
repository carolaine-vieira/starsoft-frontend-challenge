// External dependencies
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Internal dependencies
import Styles from './Header.module.scss';
import { HeaderProps } from './Header.types';
import { ButtonCart } from '../button-cart/ButtonCart';

export const Header = ({ className = '' }: HeaderProps) => {
	return (
		<header className={`${Styles.header} ${className}`}>
			<div className={`${Styles.wrapper}`}>
				<Link title="Starsoft Challenge Homepage" href={'/'}>
					<Image src={'./starsoft-logo.svg'} alt="Starsoft logo" width={101} height={38} />
				</Link>

				<ButtonCart />
			</div>
		</header>
	);
};
