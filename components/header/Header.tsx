'use client';

// External dependencies
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Internal dependencies
import Styles from './Header.module.scss';
import { HeaderProps } from './Header.types';
import { ButtonCart } from '../button-cart/ButtonCart';

export const Header = ({ className = '' }: HeaderProps) => {
	const [isSticked, setIsSticked] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticked(window.scrollY > 100);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`${Styles.header} ${className} ${isSticked ? Styles.sticked : ''}`}>
			<div className={`${Styles.wrapper}`}>
				<Link title="Starsoft Challenge Homepage" href={'/'}>
					<Image
						src={'./images/starsoft-logo.svg'}
						alt="Starsoft logo"
						width={101}
						height={38}
					/>
				</Link>

				<ButtonCart />
			</div>
		</header>
	);
};
